import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ExpensyaToolsAppComponent } from "./app.component";
import { ExceptionsListComponent } from "./exceptions-list/exceptions-list.component";
import { AppInsightComponent } from "./app-insight/app-insight.component";

const routes: Routes = [
  {
    path: "appinsight",
    children: [{ path: "exceptions", component: ExceptionsListComponent }]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ExpensyaToolsAppRoutingModule {}
