import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { ExpensyaToolsAppComponent } from "./app.component";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ExpensyaToolsAppComponent]
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(ExpensyaToolsAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ExpensyaTools'`, () => {
    const fixture = TestBed.createComponent(ExpensyaToolsAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("ExpensyaTools");
  });

  it("should render title in a h1 tag", () => {
    const fixture = TestBed.createComponent(ExpensyaToolsAppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("h1").textContent).toContain(
      "Welcome to ExpensyaTools!"
    );
  });
});
