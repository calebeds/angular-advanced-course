import { ComponentFixture, TestBed, async } from "@angular/core/testing";

import { AppComponent } from "./app.component";
import { AuFaInputComponent } from "./lib/au-fa-input/au-fa-input.component";
import { InputRefDirective } from "./lib/common/input-ref.directive";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe("AppComponent", () => {
  let component: AppComponent,
    fixture: ComponentFixture<AppComponent>,
    el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, AuFaInputComponent, InputRefDirective],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    el = fixture.debugElement;
  });

  it("should create the app", async(() => {
    expect(component).toBeTruthy();
  }));

  it("should create a font awesome email input", async(() => {
    const emailField = el.query(By.css("#email-field"));

    expect(emailField).toBeTruthy();
    expect(emailField.query(By.css("i.icon.fa.fa-envelop")));
    expect(emailField.query(By.css("input.test-class")));
  }));
});
