const fs = require('fs');
const path = require('path');

test('Param usage', () => {
  const code = fs.readFileSync(path.resolve(__dirname, '../script.js'), 'utf8');
  // This test checks: Param usage
  expect(code).toMatch(/\(name\)\s*{[^}]*name[^}]*}/);
});
