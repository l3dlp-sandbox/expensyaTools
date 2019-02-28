import { EventEmitter, Injectable } from "@angular/core";
import { Event, NavigationEnd, Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { NavItem } from "../models/nav-item";

@Injectable()
export class NavService {
  public appDrawer: any;
  public currentUrl = new BehaviorSubject<string>(undefined);

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl.next(event.urlAfterRedirects);
      }
    });
  }

  public closeNav() {
    this.appDrawer.close();
  }

  public openNav() {
    this.appDrawer.open();
  }
  public getSideNavToolsList(): Array<NavItem> {
    const navItemList: NavItem[] = [
      {
        displayName: "App Insight",
        iconName: "cloud_circle",
        route: "appinsight",
        children: [
          {
            displayName: "Exceptions",
            iconName: "warning",
            route: "appinsight/exceptions",
            children: []
          },
          {
            displayName: "Query",
            iconName: "create",
            route: "appinsight/query",
            children: []
          }
        ]
      }
    ];
    return navItemList;
  }
}
