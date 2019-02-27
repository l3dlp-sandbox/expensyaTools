import { Component, OnInit } from "@angular/core";
import { NavService } from "../services/nav-service.service";

@Component({
  selector: "app-top-menu",
  templateUrl: "./top-menu.component.html",
  styleUrls: ["./top-menu.component.scss"]
})
export class TopMenuComponent implements OnInit {
  constructor(public navService: NavService) {}

  ngOnInit() {}
}
