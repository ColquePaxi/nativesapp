import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NSModuleFactoryLoader } from "nativescript-angular/router";
import * as platform from 'platform';

import { AppRoutingModule } from "./app-routing.module";
import { CoreModule } from './core';
import { AppComponent } from "./app.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
      NativeScriptModule,
      AppRoutingModule,
      CoreModule
    ],
    declarations: [
      AppComponent
    ],
    providers: [
      { provide: NgModuleFactoryLoader, useClass: NSModuleFactoryLoader },
      { provide: 'platform', useValue: platform },
    ],
    schemas: [
      NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
