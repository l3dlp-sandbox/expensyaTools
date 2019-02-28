import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LoaderComponent } from "./loader.component";
import { ExpensyaToolsMaterialModule } from "src/material-modules";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe("LoaderComponent", () => {
  let component: LoaderComponent;
  let fixture: ComponentFixture<LoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoaderComponent],
      imports: [
        ExpensyaToolsMaterialModule,
        FormsModule,
        BrowserAnimationsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
