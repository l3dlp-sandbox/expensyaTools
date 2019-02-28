import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { MenuListItemComponent } from "./menu-list-item.component";
import { ExpensyaToolsMaterialModule } from "src/material-modules";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavService } from "../services/nav-service.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { LoaderInterceptorService } from "../services/loader-interceptor.service";
import { Router } from "@angular/router";

describe("MenuListItemComponent", () => {
  let component: MenuListItemComponent;
  let fixture: ComponentFixture<MenuListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MenuListItemComponent],
      imports: [
        ExpensyaToolsMaterialModule,
        FormsModule,
        BrowserAnimationsModule,
        RouterTestingModule
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
    fixture = TestBed.createComponent(MenuListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
