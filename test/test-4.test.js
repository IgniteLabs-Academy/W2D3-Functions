const { greet, greetArrow } = require('../script.js');

test('greet and greetArrow return correct greeting and log output', () => {
  expect(greet('Alex')).toBe('Hello, Alex!');
  expect(greetArrow('Sam')).toBe('Hello, Sam!');
  const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  console.log(greet('Alex'));
  expect(logSpy).toHaveBeenCalledWith('Hello, Alex!');
  console.log(greetArrow('Sam'));
  expect(logSpy).toHaveBeenCalledWith('Hello, Sam!');
  logSpy.mockRestore();
}); 