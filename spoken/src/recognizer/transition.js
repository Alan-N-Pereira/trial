const compareStrings = require('../string-distance').default;
const { normalizeTransition } = require('./utils');
const Automata = require('./automata').default;
const Modules = require('../modules-loader').default;

/**
 * This class represents a transition between two nodes in an automata.
 * A transition could be a simple string transition, a regex transition,
 * or an automata transition.
 */
class Transition {
	constructor(transition) {
		this.transition = transition;
	}

	accepts(inputString, index) {
		throw new Error('This method must be implemented by subclasses');
	}

	normalize(text, normalizer) {
		const lang = this.transition.options.graph.lang;
		return Modules.normalizers(normalizer, lang)(text, compareStrings);
	}
}

/**
 * A simple string transition in the format of: (Option, Option, ...)
 * Where each 'Option' is a valid accepted input transition;
 * If the strings are equal* the transition is made.
 */
class StringTransition extends Transition {
	accepts(inputString, index = 0) {
		const word = inputString[index];
		const { text } = this.transition;

		if (text === 'λ') return { index: index, consumed: [ null ] };

		if (compareStrings(word, text, this.transition.options.disableSpellcheck)) {
			const { store, choiceIndex, normalizer } = this.transition.options;
			const value = normalizer ? this.normalize(word, normalizer) : choiceIndex;

			// Normalizer has total control over this ?
			if (value == null) return null;

			const path = store ? { [store]: value } : word;

			return { index: index + 1, consumed: [ path ] };
		}

		return null;
	}
}

/**
 * A regex transition in the format of: ({Option}, {Option}, ...)
 * Where each '{Option}' is a regex, if the regex matches the transition
 * string the transition is made.
 */
class RegexTransition extends Transition {
	accepts(inputString, index = 0) {
		const word = inputString[index];
		const { text } = this.transition;
		const template = Modules.templates(text.trim());
		const match = new RegExp(template.value).exec(word);

		if (match != null) {
			const { store, normalizer = template.defaultNormalizer } = this.transition.options;
			const value = this.normalize(word, normalizer);

			// Normalizer has total control over this ?
			if (value == null) return null;

			const path = store ? { [store]: value } : value;

			return { index: index + 1, consumed: [ path ] };
		}

		return null;
	}
}

/**
 * An automata transition in the format of: ([Option], [Option], ...)
 * Where each '[Option]' is a different automata that should be used
 * to test the transition string, if that automata accepts the string
 * the transition is made.
 */
class AutomataTransition extends Transition {
	constructor(transition) {
		super(transition);
		this.automataId = transition.text.replace(/\[(.*)\]/gi, '$1');
	}

	accepts(inputString, index = 0) {
		const { store, graph } = this.transition.options;
		const result = new Automata(this.automataId, graph.lang).recognize(inputString, index);

		if (result !== null) {
			const graphInfo = result[0].graph();
			const automata = {
				id: this.automataId,
				lang: graph.lang,
				impl: graphInfo.impl,
				path: result[1].path,
				extraArgs: this.transition.options.extraArgs
			};

			const path = store ? { [store]: automata } : automata;

			return { index: result[2], consumed: [ path ] };
		}

		return null;
	}
}

class Transitions {
	constructor(rawTransition) {
		this.transitions = normalizeTransition(rawTransition).map(this.buildTransition);
	}

	accepts(inputString, index = 0) {
		for (const transition of this.transitions) {
			const result = transition.accepts(inputString, index);

			if (result != null) {
				return result;
			}
		}

		return null;
	}

	buildTransition(transition) {
		if (transition.type === 'STRING') return new StringTransition(transition);
		if (transition.type === 'REGEX') return new RegexTransition(transition);
		if (transition.type === 'AUTOMATA') return new AutomataTransition(transition);

		throw new Error('Unknown transition type');
	}
}

module.exports = Transitions;
