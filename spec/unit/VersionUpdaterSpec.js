const fs = require('fs');

const BASE = '../../src/';
const VersionUpdater = require(`${BASE}VersionUpdater`);

const VERSION_METADATA = {
  oldVersion: '0.0.1',
  newVersion: '0.0.2'
};

describe('VersionUpdater', () => {
  let fileContents;

  function assert(config, filePath, contains) {
    VersionUpdater.update(VERSION_METADATA, config);

    expect(fs.readFileSync).toHaveBeenCalledWith(filePath, {encoding: 'utf-8'});
    expect(fs.writeFileSync).toHaveBeenCalledWith(filePath, fileContents);

    contains.forEach((testee) => {
      expect(fileContents).toContain(testee);
    });
  }

  beforeEach(() => {
    fileContents = undefined;

    spyOn(fs, 'readFileSync').and.callFake(() => {
      return '"version": "0.0.1"';
    });
    spyOn(fs, 'writeFileSync').and.callFake((filePath, contents) => {
      fileContents = contents;
    });
  });

  it('should replace the version with new version', () => {
    assert({}, './package.json', ['"version": "0.0.2"']);
  });

  it('should replace the version with new version (override default)', () => {
    assert({path: 'swegg'}, 'swegg', ['"version": "0.0.2"']);
  });
});