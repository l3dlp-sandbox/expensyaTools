import { Injectable } from "@angular/core";
import { ConfigService } from "./config.service";
import { HttpParams } from "@angular/common/http";
import { AppInsightResult } from "../models/app-insight-result";
import { DateRange } from "../models/date-range.enum";

@Injectable({
  providedIn: "root"
})
export class AppInsightService {
  private exceptionsUrl = "events/exceptions";
  constructor(private configService: ConfigService) {}

  public getLastExceptions(period: DateRange) {
    const params: HttpParams = new HttpParams().set("timespan", period);
    return this.configService.get<AppInsightResult>(this.exceptionsUrl, params);
  }
}
