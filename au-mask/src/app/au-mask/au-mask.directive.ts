import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from "@angular/core";
import * as includes from "lodash.includes";
import { SPECIAL_CHARACTERS, TAB } from "./mask.utils";
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
  onKeyDown($event: KeyboardEvent, keycode: number) {
    if ($event.keyCode !== TAB) {
      $event.preventDefault();
    }
  }

  buildPlaceholder(): string {
    const chars = this.mask.split("");

    return chars.reduce((result, char) => {
      return (result += includes(SPECIAL_CHARACTERS, char) ? char : "_");
    }, "");
  }
}
