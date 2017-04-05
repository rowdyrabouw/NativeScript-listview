import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { TNSFontIconModule } from 'nativescript-ngx-fonticon';

import { ItemService } from "./item/item.service";
import { ItemsComponent } from "./item/items.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        TNSFontIconModule.forRoot({
            'fa': 'assets/css/font-awesome.css'
        }),
    ],
    declarations: [
        AppComponent,
        ItemsComponent
    ],
    providers: [
        ItemService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
