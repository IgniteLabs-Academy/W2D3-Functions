const fs = require('fs');
const path = require('path');

test('Console call', () => {
  const code = fs.readFileSync(path.resolve(__dirname, '../script.js'), 'utf8');
  // This test checks: Console call
  expect(code).toMatch(/console\.log\(.*\)/);
});
