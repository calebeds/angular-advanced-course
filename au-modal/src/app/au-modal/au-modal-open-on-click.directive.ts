import {
  AfterContentInit,
  ContentChild,
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from "@angular/core";
import { AuModalService } from "./au-modal.service";

@Directive({
  selector: "[auModalOpenOnClick]",
})
export class AuModalOpenOnClickDirective implements OnInit {
  constructor(
    private templateRef: TemplateRef<unknown>,
    private viewContainer: ViewContainerRef,
    private modalService: AuModalService
  ) {}

  ngOnInit(): void {
    this.modalService.close$.subscribe(() => this.viewContainer.clear());
  }

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
