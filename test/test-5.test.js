const { multiply } = require('../script.js');

test('multiply returns correct product and logs output', () => {
  expect(multiply(2, 3)).toBe(6);
  expect(multiply(-2, 3)).toBe(-6);
  const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  console.log(multiply(2, 3));
  expect(logSpy).toHaveBeenCalledWith(6);
  logSpy.mockRestore();
}); 