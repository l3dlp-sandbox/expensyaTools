import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, MatTableDataSource, MatSort } from "@angular/material";
import { AppInsightService } from "../services/app-insight.service";
import { AppInsight } from "../models/app-insight";
import { ConfigService } from "../services/config.service";
import { ExceptionsFiltersService } from "../services/exceptions-filters.service";
import { DateRange } from "../models/date-range.enum";
import { isEmpty } from "rxjs/operators";
import { isNullOrUndefined } from "util";

@Component({
  selector: "app-exceptions-list",
  templateUrl: "./exceptions-list.component.html",
  styleUrls: ["./exceptions-list.component.scss"]
})
export class ExceptionsListComponent implements OnInit {
  displayedColumns: string[] = [
    "id",
    "timestamp",
    "ai.appName",
    "cloud.roleName",
    "cloud.roleInstance",
    "exception.type",
    "exception.method"
  ];
  exceptionsList: AppInsight[];
  dataSource: MatTableDataSource<AppInsight>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public appInsightService: AppInsightService,
    public configService: ConfigService,
    public exceptionsFiltersService: ExceptionsFiltersService
  ) {}
  dateRangeSelectList = this.exceptionsFiltersService.getDateRangeSelectElements();
  selectedRange = DateRange.last12H;

  ngOnInit() {
    this.getLastExceptionsAndInitTable(DateRange.last12H);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getLastExceptionsAndInitTable(period: DateRange) {
    this.dataSource = new MatTableDataSource<AppInsight>(null);
    this.appInsightService.getLastExceptions(period).subscribe(data => {
      if (data != null) {
        this.exceptionsList = data.value;
        this.dataSource = new MatTableDataSource<AppInsight>(
          this.exceptionsList
        );
        this.dataSource.filterPredicate = (data: AppInsight, filter) => {
          const dataStr =
            data.id +
            data.timestamp +
            data.ai.appName +
            data.cloud.roleInstance +
            data.cloud.roleName +
            data.exception.type +
            data.exception.method;
          return (
            dataStr
              .trim()
              .toLocaleLowerCase()
              .indexOf(filter) != -1
          );
        };
        this.dataSource.sortingDataAccessor = (item: AppInsight, property) => {
          switch (property) {
            case "ai.appName":
              return item.ai.appName;
            case "cloud.roleName":
              return item.cloud.roleName;
            case "cloud.roleInstance":
              return item.cloud.roleInstance;
            case "exception.type":
              return item.exception.type;
            case "exception.method":
              return item.exception.method;
            default:
              return item[property];
          }
        };
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    });
  }
}
