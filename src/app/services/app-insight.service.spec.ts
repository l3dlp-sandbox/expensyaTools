import { TestBed } from "@angular/core/testing";

import { AppInsightService } from "./app-insight.service";

describe("AppInsightServiceService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: AppInsightService = TestBed.get(AppInsightService);
    expect(service).toBeTruthy();
  });
});
