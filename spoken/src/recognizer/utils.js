const graphlib = require('graphlib');

/**
 * Normalize a raw transition into a serialized transition format.
 * @param {Object} rawTransition - The raw transition object.
 * @returns {Object[]} - An array of serialized transitions.
 */
function normalizeTransition(rawTransition) {
	const options = parseTransitionLabel(rawTransition.label);

	return options.map((item, index) => ({
		options: { ...rawTransition, choiceIndex: index },
		type: getTransitionType(item),
		text: item
	}));
}

/**
 * Parse a transition label into its component parts.
 * @param {string} str - The transition label string.
 * @returns {string[]} - An array of parsed transition options.
 */
function parseTransitionLabel(str) {
	return str.trim().replace(/\(/, '').replace(/\)$/, '').split(/, |,/);
}

/**
 * Determine the type of a transition based on its string representation.
 * @param {string} str - The transition string.
 * @returns {string} - The type of the transition ('STRING', 'REGEX', 'AUTOMATA').
 */
function getTransitionType(str) {
	if (/\{(.*)\}/.test(str)) return 'REGEX';
	if (/\[(.*)\]/.test(str)) return 'AUTOMATA';

	return 'STRING';
}

/**
 * Sort the successors of a given node in a graph based on transition priority.
 * @param {string} current - The current node.
 * @param {graphlib.Graph} graph - The graph object.
 * @returns {Function} - A comparator function for sorting successors.
 */
function sortSucessors(current, graph) {
	function priorityOf(transition) {
		if (transition.includes('λ')) return 6;
		if (transition.includes('[')) return 4;
		if (transition.includes('{')) return 2;

		return 1;
	}

	return (a, b) => {
		const pa = priorityOf(graph.edge(current, a).label);
		const pb = priorityOf(graph.edge(current, b).label);

		if (pa < pb) return -1;
		else if (pa > pb) return 1;

		return 0;
	};
}

module.exports = {
	normalizeTransition,
	parseTransitionLabel,
	getTransitionType,
	sortSucessors
};
