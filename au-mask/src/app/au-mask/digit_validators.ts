type DigitValidator = (char: string) => boolean;

const numericValidator: DigitValidator = (char) => /[0-9]{1}/.test(char);

export const maskDigitValidators: { [key: string]: DigitValidator } = {
  "9": numericValidator,
};
