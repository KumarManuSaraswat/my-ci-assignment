const getMessage = require('./message');

test('returns Hello CI', () => {
  expect(getMessage()).toBe('Hello World');
});