const VersionUpdater = require('./VersionUpdater');

function wrapFunction(func) {
  return (config) => {
    return (newVersion, done) => {
      return func(newVersion, config, done);
    };
  };
}

module.exports = {
	updateVersion: wrapFunction(VersionUpdater.update)
};