import { TestBed } from "@angular/core/testing";

import { NavService } from "./nav-service.service";

describe("NavServiceService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: NavService = TestBed.get(NavService);
    expect(service).toBeTruthy();
  });
});
