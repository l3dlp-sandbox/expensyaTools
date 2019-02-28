import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { ExpensyaToolsAppComponent } from "./app.component";
import { TopMenuComponent } from "./top-menu/top-menu.component";
import { MenuListItemComponent } from "./menu-list-item/menu-list-item.component";
import { LoaderComponent } from "./loader/loader.component";
import { ExpensyaToolsMaterialModule } from "../material-modules";
import { LoaderInterceptorService } from "./services/loader-interceptor.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NavService } from "./services/nav-service.service";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ExpensyaToolsMaterialModule,
        FormsModule,
        BrowserAnimationsModule
      ],
      declarations: [
        ExpensyaToolsAppComponent,
        TopMenuComponent,
        MenuListItemComponent,
        LoaderComponent
      ],
      providers: [
        NavService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: LoaderInterceptorService,
          multi: true
        }
      ]
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
});
