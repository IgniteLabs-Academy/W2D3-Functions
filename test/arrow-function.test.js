const fs = require('fs');
const path = require('path');

test('Arrow function', () => {
  const code = fs.readFileSync(path.resolve(__dirname, '../script.js'), 'utf8');
  // This test checks: Arrow function
  expect(code).toMatch(/const\s+.*=\s*\(.*\)\s*=>/);
});
