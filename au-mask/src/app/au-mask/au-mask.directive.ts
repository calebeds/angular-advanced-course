import { Directive, ElementRef, Input, OnInit } from "@angular/core";
import * as includes from "lodash.includes";
import { SPECIAL_CHARACTERS } from "./mask.utils";
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

  buildPlaceholder(): string {
    const chars = this.mask.split("");

    return chars.reduce((result, char) => {
      return (result += includes(SPECIAL_CHARACTERS, char) ? char : "_");
    }, "");
  }
}
