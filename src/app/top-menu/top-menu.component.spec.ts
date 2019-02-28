import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TopMenuComponent } from "./top-menu.component";
import { NavService } from "../services/nav-service.service";
import { ExpensyaToolsMaterialModule } from "src/material-modules";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { LoaderInterceptorService } from "../services/loader-interceptor.service";
import { Router } from "@angular/router";

describe("TopMenuComponent", () => {
  let component: TopMenuComponent;
  let fixture: ComponentFixture<TopMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TopMenuComponent],
      imports: [
        ExpensyaToolsMaterialModule,
        FormsModule,
        BrowserAnimationsModule
      ],
      providers: [
        NavService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: LoaderInterceptorService,
          multi: true
        },
        {
          provide: Router,
          useClass: class {
            navigate = jasmine.createSpy("navigate");
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
