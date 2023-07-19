import {
  AfterContentInit,
  ContentChild,
  Directive,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from "@angular/core";
import { AuModalService } from "./au-modal.service";

@Directive({
  selector: "[auModalOpenOnClick]",
})
export class AuModalOpenOnClickDirective implements OnInit, OnDestroy {
  elements: HTMLBaseElement[];

  constructor(
    private templateRef: TemplateRef<unknown>,
    private viewContainer: ViewContainerRef,
    private modalService: AuModalService
  ) {}

  ngOnInit(): void {
    this.modalService.close$.subscribe(() => this.viewContainer.clear());
  }

  ngOnDestroy(): void {
    this.elements.forEach((el) =>
      el.removeEventListener("click", this.clickHandler)
    );
  }

  @Input()
  set auModalOpenOnClick(els: HTMLBaseElement | HTMLBaseElement[]) {
    if ((<HTMLBaseElement[]>els).length) {
      this.elements = <HTMLBaseElement[]>els;
    } else {
      this.elements = [<HTMLBaseElement>els];
    }

    this.elements.forEach((el) => {
      el.addEventListener("click", this.clickHandler);
    });
  }

  clickHandler = (() => {
    this.viewContainer.clear();
    this.viewContainer.createEmbeddedView(this.templateRef);
  }).bind(this);
}
