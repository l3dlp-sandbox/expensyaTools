import { Type } from "@angular/compiler";

export class SelectElement {
  value: any;
  viewValue: string;
  constructor(value: any, viewValue: string) {
    this.value = value;
    this.viewValue = viewValue;
  }
}
