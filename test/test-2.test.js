const { calculateBMI } = require('../script.js');

test('calculateBMI returns correct BMI and logs output', () => {
  expect(calculateBMI(2, 80)).toBeCloseTo(20);
  expect(calculateBMI(1.8, 81)).toBeCloseTo(25);
  const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  console.log(calculateBMI(2, 80));
  expect(logSpy).toHaveBeenCalledWith(20);
  logSpy.mockRestore();
}); 