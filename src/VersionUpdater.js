const fs = require('fs');

const merge = require('merge');

const DEFAULT = {
  path: './package.json'
};

function update(versionMetadata, config) {
  config = merge.recursive(true, DEFAULT, config);

  let fileContents = fs.readFileSync(config.path, {encoding: 'utf-8'});

  let versionRegex = /("version": ")(.*)(")/g;
  let replacement = `$1${versionMetadata.newVersion}$3`;
  fileContents = fileContents.replace(versionRegex, replacement);

  fs.writeFileSync(config.path, fileContents);
}

module.exports = {
  update
};