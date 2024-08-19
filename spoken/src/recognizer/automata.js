const graphlib = require('../graphlib');
const Transitions = require('./transition').default;
const { TransitionsTypes } = require('./transition');
const { sortSucessors } = require('./utils');
const StopWordsEngine = require('../stop-words-engine').default;
const Modules = require('../modules-loader').default;

/**
 * This class represents an automata, it is responsible for telling
 * if a given automata recognizes or not a given input string.
 */
class Automata {
	constructor(graph, lang) {
		this.currentState = {
			id: '0',
			isFinal: false,
			path: []
		};

		if (typeof graph === 'string') {
			if (typeof lang === 'undefined') throw new Error('Language is not defined!');

			const graph2 = Modules.findAutomataById(graph, lang);

			if (graph2 == null) throw new Error('Automata ' + graph + ' not found!');

			graph = graph2;
		}

		if (lang == null) lang = graph.graph().lang;

		this.stopWordsEngine =
			graph.graph().disableStopWords !== 'true'
				? new StopWordsEngine(
						Modules.context.stopWords[lang].words,
						Modules.context.stopWords[lang].expressions
					)
				: null;

		this.graph = graph;
	}

	recognize(inputString, index = 0) {
		while (index < inputString.length) {
			if (this.stopWordsEngine != null) {
				const skip = this.stopWordsEngine.skipStopWords(index, inputString);

				if (skip !== 0) {
					index += skip;
					continue;
				}
			}

			const state = this.nextState(inputString, index);

			if (state == null) break;

			index = state.index;

			this.setState(state);
		}

		if (this.currentState.isFinal) return [ this.graph, this.currentState, index ];

		return null;
	}

	setState(state) {
		this.currentState = {
			id: state.id,
			isFinal: this.graph.node(state.id).shape === 'doublecircle',
			path: [ ...this.currentState.path, ...state.path ]
		};
	}

	nextState(inputString, index = 0) {
		for (const sucessor of this.getSucessors()) {
			const transition = this.getTransitions(sucessor);

			const result = transition.accepts(inputString, index);

			if (result != null) {
				return { id: sucessor, index: result.index, path: result.consumed, isFinal: false };
			}
		}

		return null;
	}

	getSucessors() {
		const { id: current } = this.currentState;

		return (this.graph.successors(current) || []).sort(sortSucessors(current, this.graph));
	}

	getTransitions(to) {
		const graph = { id: this.graph.graph().id, lang: this.graph.graph().lang };
		const transition = { ...this.graph.edge(this.currentState.id, to), graph };

		return new Transitions(transition);
	}
}

module.exports = Automata;
