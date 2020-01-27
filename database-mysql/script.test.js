const scriptFunction = require('./script.js');

test ('function returns number between 1 and 30 (inclusive)', () => {
  let randMinDays = scriptFunction.getRandomMinDays();
  expect(randMinDays).toBeGreaterThanOrEqual(1);
  expect(randMinDays).toBeLessThan(30);
});