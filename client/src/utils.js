function isDev() {
	return (
		process &&
		process.mainModule &&
		process.mainModule.filename &&
		process.mainModule.filename.indexOf('app.asar') === -1
	);
}

const appVersion = require('../package.json').version;

function tryAndGetGrammarFromNetwork(url) {
	const { net } = require('electron');

	return new Promise((res, rej) => {
		const request = net.request(url + '/grammar.json');

		request.on('response', (response) => {
			const result = [];

			response.on('data', (chunk) => {
				result.push(new TextDecoder().decode(chunk));
			});

			response.on('end', () => {
				const g = result.join('');

				if (!g) return res(null);

				try {
					const p = JSON.parse(g);

					console.log('Using spoken grammar provided by webapp!');

					res(p);
				} catch (e) {
					res(null);
				}
			});
		});

		request.on('error', (e) => res(null));

		request.end();
	});
}

module.exports = {
	isDev,
	appVersion,
	tryAndGetGrammarFromNetwork
};
