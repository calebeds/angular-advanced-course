type DigitValidator = (char: string) => boolean;

const numericValidator: DigitValidator = (char) => /[0-9]{1}/.test(char);
const lowerCaseValidator: DigitValidator = (char) => /[a-z]{1}/.test(char);
const upperCaseValidator: DigitValidator = (char) => /[A-Z]{1}/.test(char);
const anyValidator: DigitValidator = (char) => true;
const numberRangeCaseValidator = (maxValue: number, char: string) =>
  numericValidator(char) && parseInt(char) <= maxValue;

export const neverValidator: DigitValidator = (char) => false;

export const maskDigitValidators: { [key: string]: DigitValidator } = {
  a: lowerCaseValidator,
  A: upperCaseValidator,
  "*": anyValidator,
};

for (let i = 0; i <= 9; i++) {
  maskDigitValidators[i] = numberRangeCaseValidator.bind(undefined, i);
}
