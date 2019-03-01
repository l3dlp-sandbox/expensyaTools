import { Injectable } from "@angular/core";
import { SelectElement } from "../models/select-element";
import { DateRange } from "../models/date-range.enum";
import { AppInsight } from "../models/app-insight";

@Injectable({
  providedIn: "root"
})
export class ExceptionsFiltersService {
  constructor() {}

  public getDateRangeSelectElements(): SelectElement[] {
    return new Array<SelectElement>(
      new SelectElement(DateRange.last12H, "Last 12 hours"),
      new SelectElement(DateRange.last24H, "Last 24 hours"),
      new SelectElement(DateRange.last48H, "Last 48 hours")
    );
  }

  public getAllParamsAsString(data: AppInsight): string {
    return (
      data.id +
      data.timestamp +
      data.ai.appName +
      data.cloud.roleInstance +
      data.cloud.roleName +
      data.exception.type +
      data.exception.method
    );
  }
}
