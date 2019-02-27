import {
  Component,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
  AfterViewInit
} from "@angular/core";
import { NavService } from "./services/nav-service.service";
import { NavItem } from "./models/nav-item";
import { VERSION } from "@angular/material";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class ExpensyaToolsAppComponent implements AfterViewInit {
  title = "ExpensyaTools";
  @ViewChild("appDrawer") appDrawer: ElementRef;
  version = VERSION;
  navItems: NavItem[];
  constructor(private navService: NavService) {
    this.navItems = navService.getSideNavToolsList();
  }

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }
}
