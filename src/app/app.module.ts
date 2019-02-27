import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ExpensyaToolsMaterialModule } from "../material-modules";
import { NavService } from "./services/nav-service.service";
import { HttpClientModule } from "@angular/common/http";

import { ExpensyaToolsAppRoutingModule } from "./app-routing.module";
import { ExpensyaToolsAppComponent } from "./app.component";
import { ExceptionsListComponent } from "./exceptions-list/exceptions-list.component";
import { TopMenuComponent } from "./top-menu/top-menu.component";
import { MenuListItemComponent } from "./menu-list-item/menu-list-item.component";
import { AppInsightComponent } from "./app-insight/app-insight.component";
import { LoaderComponent } from "./loader/loader.component";
import { LoaderInterceptorService } from "./services/loader-interceptor.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    ExpensyaToolsAppComponent,
    ExceptionsListComponent,
    TopMenuComponent,
    MenuListItemComponent,
    AppInsightComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    ExpensyaToolsAppRoutingModule,
    BrowserAnimationsModule,
    ExpensyaToolsMaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    NavService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptorService,
      multi: true
    }
  ],
  bootstrap: [ExpensyaToolsAppComponent]
})
export class ExpensyaToolsAppModule {}
