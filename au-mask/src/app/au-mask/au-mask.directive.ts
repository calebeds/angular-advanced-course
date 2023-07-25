import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from "@angular/core";
import * as includes from "lodash.includes";
import * as findLastIndex from "lodash.findlastindex";
import * as findIndex from "lodash.findindex";
import {
  LEFT_ARROW,
  RIGHT_ARROW,
  SPECIAL_CHARACTERS,
  TAB,
  overwriteCharAtPosition,
} from "./mask.utils";
import { maskDigitValidators, neverValidator } from "./digit_validators";
@Directive({
  selector: "[au-mask]",
})
export class AuMaskDirective implements OnInit {
  @Input("au-mask")
  mask = "";

  input: HTMLInputElement;

  constructor(el: ElementRef) {
    this.input = el.nativeElement;
  }

  ngOnInit(): void {
    this.input.value = this.buildPlaceholder();
  }

  @HostListener("keydown", ["$event", "$event.keyCode"])
  onKeyDown($event: KeyboardEvent, keyCode: number): void {
    if ($event.keyCode !== TAB) {
      $event.preventDefault();
    }

    const key = $event.key,
      cursorPos = this.input.selectionStart;

    switch (keyCode) {
      case LEFT_ARROW: {
        this.handleLeftArrow(cursorPos);
        return;
      }
      case RIGHT_ARROW: {
        this.handleRightArrow(cursorPos);
        return;
      }
    }

    const maskDigit = this.mask.charAt(cursorPos),
      digitValidator = maskDigitValidators[maskDigit] || neverValidator;

    if (digitValidator(key)) {
      overwriteCharAtPosition(this.input, cursorPos, key);
      this.handleRightArrow(cursorPos);
    }
  }

  handleLeftArrow(cursorPos: number) {
    const valueBeforeCursor = this.input.value.slice(0, cursorPos);
    const previousPos = findLastIndex(
      valueBeforeCursor,
      (char) => !includes(SPECIAL_CHARACTERS, char)
    );

    if (previousPos >= 0) {
      this.input.setSelectionRange(previousPos, previousPos);
    }
  }

  handleRightArrow(cursorPos: number) {
    const valueAfterCursor = this.input.value.slice(cursorPos + 1);
    const nextPos = findIndex(
      valueAfterCursor,
      (char) => !includes(SPECIAL_CHARACTERS, char)
    );

    if (nextPos >= 0) {
      const newCursorPos = cursorPos + nextPos + 1;

      this.input.setSelectionRange(newCursorPos, newCursorPos);
    }
  }

  buildPlaceholder(): string {
    const chars = this.mask.split("");

    return chars.reduce((result, char) => {
      return (result += includes(SPECIAL_CHARACTERS, char) ? char : "_");
    }, "");
  }
}
