import { ComponentFixture, TestBed, async } from "@angular/core/testing";

import { AppComponent } from "./app.component";
import { AuTabPanelComponent } from "./au-tab-panel/au-tab-panel.component";
import { DebugElement } from "@angular/core";
import { AuTabComponent } from "./au-tab/au-tab.component";
import { By } from "@angular/platform-browser";

describe("AppComponent", () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let el: DebugElement;
  let tabPanel: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, AuTabPanelComponent, AuTabComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    el = fixture.debugElement;
    tabPanel = el.query(By.css("#tab-panel"));

    fixture.detectChanges();
  });

  it("should create the app", async(() => {
    expect(app).toBeTruthy();
  }));

  it("should find only one tab inside the tab container", async(() => {
    const tabs = tabPanel.queryAll(By.css(".tab"));

    expect(tabs).toBeTruthy();
    expect(tabs.length).toBe(1);
  }));

  it("should find the Contact tab button marked as active", async(() => {
    const selectedButton = tabPanel.query(
      By.css(".tab-panel-buttons li.selected")
    ).nativeElement;

    expect(selectedButton).toBeTruthy();
    expect(selectedButton.textContent).toBe(" Contact ");
  }));

  it("should display the Contacts tab", async(() => {
    const contactEmail = tabPanel.query(By.css(".contact-email"));

    expect(contactEmail).toBeTruthy();
  }));
});
