import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin.component';
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {SharedModule} from "../../shared/shared.module";
import { MakeRequestsComponent } from './children/make-requests/make-requests.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { ExpiredFoodComponent } from './children/expired-food/expired-food.component';
import {MatTableModule} from "@angular/material/table";
import {MatCheckboxModule} from "@angular/material/checkbox";


@NgModule({
    declarations: [
        AdminComponent,
        MakeRequestsComponent,
        AdminViewComponent,
        ExpiredFoodComponent
    ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        SharedModule,
        MatCardModule,
        MatGridListModule,
        MatTableModule,
        MatCheckboxModule
    ]
})
export class AdminModule {
}
