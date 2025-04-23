const fs = require('fs');
const path = require('path');

test('Function declared', () => {
  const code = fs.readFileSync(path.resolve(__dirname, '../script.js'), 'utf8');
  // This test checks: Function declared
  expect(code).toMatch(/function\s+greet\s*\(.*\)/);
});
