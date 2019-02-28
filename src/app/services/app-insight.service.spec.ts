import { TestBed } from "@angular/core/testing";

import { AppInsightService } from "./app-insight.service";
import { HttpClient, HttpHandler } from "@angular/common/http";

describe("AppInsightServiceService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler]
    })
  );

  it("should be created", () => {
    const service: AppInsightService = TestBed.get(AppInsightService);
    expect(service).toBeTruthy();
  });
});
