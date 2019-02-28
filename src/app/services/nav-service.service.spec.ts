import { TestBed } from "@angular/core/testing";

import { NavService } from "./nav-service.service";
import { Router } from "@angular/router";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { LoaderInterceptorService } from "./loader-interceptor.service";

describe("NavServiceService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
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
    })
  );
});
