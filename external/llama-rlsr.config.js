const llamaRlsrNpm = require('../src/llama-rlsr-npm');

module.exports = [
	llamaRlsrNpm.updateVersion({
		path: '../package.json'
	})
];