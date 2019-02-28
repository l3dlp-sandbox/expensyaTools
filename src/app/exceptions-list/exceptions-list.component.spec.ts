import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ExceptionsListComponent } from "./exceptions-list.component";
import { ExpensyaToolsMaterialModule } from "../../material-modules";
import { FormsModule } from "@angular/forms";
import { ConfigService } from "../services/config.service";
import { HttpClient, HttpHandler, HttpParams } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe("ExceptionsListComponent", () => {
  let component: ExceptionsListComponent;
  let fixture: ComponentFixture<ExceptionsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExceptionsListComponent],
      imports: [
        ExpensyaToolsMaterialModule,
        FormsModule,
        BrowserAnimationsModule
      ],
      providers: [ConfigService, HttpClient, HttpHandler]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExceptionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
