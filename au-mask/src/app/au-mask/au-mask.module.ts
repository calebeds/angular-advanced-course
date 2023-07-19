import { ElementRef, Input, NgModule, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuMaskDirective } from "./au-mask.directive";

@NgModule({
  declarations: [AuMaskDirective],
  imports: [CommonModule],
  exports: [AuMaskDirective],
})
export class AuMaskModule implements OnInit {
  @Input("au-mask")
  mask = "";

  input: HTMLInputElement;

  constructor(el: ElementRef) {
    this.input = el.nativeElement;
  }

  ngOnInit(): void {}
}
