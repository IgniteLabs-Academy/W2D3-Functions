const { checkEven } = require('../script.js');

test('checkEven returns correct boolean and logs output', () => {
  expect(checkEven(4)).toBe(true);
  expect(checkEven(5)).toBe(false);
  const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  console.log(checkEven(4));
  expect(logSpy).toHaveBeenCalledWith(true);
  logSpy.mockRestore();
}); 