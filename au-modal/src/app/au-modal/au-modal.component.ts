import { Component, Input, OnInit, TemplateRef } from "@angular/core";
import { AuModalService } from "./au-modal.service";

@Component({
  selector: "au-modal",
  templateUrl: "./au-modal.component.html",
  styleUrls: ["./au-modal.component.scss"],
})
export class AuModalComponent implements OnInit {
  @Input()
  body: TemplateRef<unknown>;

  constructor(private modalService: AuModalService) {}

  ngOnInit() {}

  closeModal(): void {
    this.modalService.close();
  }

  cancelClick(evt: KeyboardEvent): void {
    evt.preventDefault();
    evt.stopPropagation();
  }
}
