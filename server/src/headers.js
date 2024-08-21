import cors from 'cors';

export default function config(app) {
	return process.env.PROD !== 'TRUE' ? dev(app) : prod(app);
}

function prod(app) {
	console.log('[server.app] Running on production mode!');
	// Allow only requests from the demo page
	app.use(cors({ origin: 'https://github.com/Alan-N-Pereira', optionsSuccessStatus: 200 }));

	/**
     * By no means is this an authentication!
     * 
     * Actual authentication for this App Service
     * is made through Microsoft Azure Identity Platform (Azure AD).
     */
	app.use(async (req, res, next) => {
		const kn = process.env.SPEECH2CODE_HEADER_NAME || '';
		const kv = process.env.SPEECH2CODE_HEADER_VALUE || '';

		if (kn === '' || kv === '') {
			return res.status(401).send('<h1>401 - UNAUTHORIZED</h1>');
		}

		const userkv = req.header(kn);
		const userkv2 = req.header(process.env.SPEECH2CODE_HEADER_NAME_2);
		const kv2 = process.env.SPEECH2CODE_HEADER_VALUE_2;

		if (kv !== userkv && kv2 !== userkv2) {
			return res.status(401).send('<h1>401 - UNAUTHORIZED</h1>');
		}

		next();
	});
}

function dev(app) {
	console.log('[server.app] Running on development mode!');

	// Enable CORS for react-dev-server
	app.use(cors());
}