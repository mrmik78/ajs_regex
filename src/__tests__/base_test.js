import validateUsername from '../base';

test('Validating username', () => {
  expect(validateUsername('_Alex444-Test')).toBe(false);
  expect(validateUsername('Alex444-Test_')).toBe(false);
  expect(validateUsername('-Alex444-Test')).toBe(false);
  expect(validateUsername('Alex444-Test-')).toBe(false);
  expect(validateUsername('Alex444-Test1')).toBe(false);
  expect(validateUsername('2Alex444-Test')).toBe(false);
  expect(validateUsername('Alex4445-Test')).toBe(false);
  expect(validateUsername('AlexВася4445-Test')).toBe(false);
  expect(validateUsername('Alex444-Test')).toBe(true);
  expect(validateUsername('Alex444-88Test33_t')).toBe(true);
});
