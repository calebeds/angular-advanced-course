export const TAB = 9,
  LEFT_ARROW = 37,
  RIGHT_ARROW = 39,
  BACKSPACE = 8,
  DELETE = 46;

export const SPECIAL_CHARACTERS = [" ", "/", "(", ")", "+", "/", "-"];

export function overwriteCharAtPosition(
  input: HTMLInputElement,
  position: number,
  key: string
) {
  const currentValue = input.value;

  input.value =
    currentValue.slice(0, position) + key + currentValue.slice(position + 1);
}
