import { TestBed } from "@angular/core/testing";

import { ConfigService } from "./config.service";
import { HttpClient, HttpHandler } from "@angular/common/http";

describe("ConfigService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler]
    })
  );

  it("should be created", () => {
    const service: ConfigService = TestBed.get(ConfigService);
    expect(service).toBeTruthy();
  });
});
