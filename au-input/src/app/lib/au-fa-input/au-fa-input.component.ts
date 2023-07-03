import {
  Component,
  ContentChild,
  Input,
  OnInit,
  AfterContentInit,
} from "@angular/core";

@Component({
  selector: "au-fa-input",
  templateUrl: "./au-fa-input.component.html",
  styleUrls: ["./au-fa-input.component.css"],
})
export class AuFaInputComponent implements OnInit, AfterContentInit {
  @Input()
  icon: string;

  @ContentChild("input")
  input: HTMLInputElement;

  constructor() {}

  ngOnInit() {}

  ngAfterContentInit(): void {
    console.log("input", this.input);
  }

  get classes(): unknown {
    const cssClasses = {};

    if (this.icon) {
      cssClasses["fa-" + this.icon] = true;
    }

    return cssClasses;
  }
}
