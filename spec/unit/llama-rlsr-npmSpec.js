const llamaRlsrNpm = require('../../src/llama-rlsr-npm');

describe('llama-rlsr-npm', () => {
  it('should have functions', () => {
    expect(typeof llamaRlsrNpm.updateVersion).toBe('function');
  });
});