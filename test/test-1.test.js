const { add } = require('../script.js');

test('add returns correct sum and logs output', () => {
  expect(add(2, 3)).toBe(5);
  expect(add(-1, 1)).toBe(0);
  const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  console.log(add(2, 3));
  expect(logSpy).toHaveBeenCalledWith(5);
  logSpy.mockRestore();
}); 