import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout/layout.component';
import {SharedModule} from "../shared/shared.module";
import {MatToolbarModule} from "@angular/material/toolbar";


@NgModule({
    declarations: [
        LayoutComponent
    ],
    exports: [
        LayoutComponent
    ],
    imports: [
        CommonModule,
        MatToolbarModule,
        SharedModule
    ]
})
export class LayoutModule {
}
