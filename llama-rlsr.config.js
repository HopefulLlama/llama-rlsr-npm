const LlamaRlsrNpm = require('./src/llama-rlsr-npm');
const LlamaRlsrKeepAChangelog = require('llama-rlsr-keep-a-changelog');

module.exports = [
  LlamaRlsrNpm.updateVersion(),
  LlamaRlsrKeepAChangelog.updateChangelog({
    placeholder: '- Nothing yet'
  }),
  LlamaRlsrKeepAChangelog.updateDiff({
    urlGenerator: (oldVersion, newVersion) => {
      return `https://github.com/HopefulLlama/llama-rlsr-npm/compare/${oldVersion}...${newVersion}`;
    },
    latest: 'HEAD',
    tag: {
      prefix: 'v'
    }
  })
];