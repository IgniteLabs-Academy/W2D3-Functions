const fs = require('fs');
const path = require('path');

test('Function returns', () => {
  const code = fs.readFileSync(path.resolve(__dirname, '../script.js'), 'utf8');
  // This test checks: Function returns
  expect(code).toMatch(/return\s+['"`]?\w+['"`]?/);
});
