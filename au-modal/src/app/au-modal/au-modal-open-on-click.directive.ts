import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[auModalOpenOnClick]",
})
export class AuModalOpenOnClickDirective {
  constructor(
    private templateRef: TemplateRef<unknown>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input()
  set auModalOpenOnClick(els: HTMLBaseElement | HTMLBaseElement[]) {
    let elements: HTMLBaseElement[];

    if ((<HTMLBaseElement[]>els).length) {
      elements = <HTMLBaseElement[]>els;
    } else {
      elements = [<HTMLBaseElement>els];
    }

    elements.forEach((el) => {
      el.addEventListener("click", () => {
        this.viewContainer.clear();
        this.viewContainer.createEmbeddedView(this.templateRef);
      });
    });
  }
}
