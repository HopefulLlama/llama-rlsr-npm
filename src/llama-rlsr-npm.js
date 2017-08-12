const VersionUpdater = require('./VersionUpdater');

function wrapFunction(func) {
  return (config) => {
    return (newVersion) => {
      return func(newVersion, config);
    };
  };
}

module.exports = {
	updateVersion: wrapFunction(VersionUpdater.update)
};