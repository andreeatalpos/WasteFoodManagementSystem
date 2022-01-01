import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ManagerRoutingModule} from './manager-routing.module';
import {ManagerComponent} from './manager/manager.component';
import {MatTableModule} from "@angular/material/table";
import {SharedModule} from "../../shared/shared.module";
import {MatDialogModule} from "@angular/material/dialog";
import { DonateFoodDialogComponent } from './dialogs/donate-food-dialog/donate-food-dialog.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";


@NgModule({
    declarations: [
        ManagerComponent,
        DonateFoodDialogComponent
    ],
    imports: [
        CommonModule,
        ManagerRoutingModule,
        SharedModule,
        ReactiveFormsModule,
        MatTableModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule
    ]
})
export class ManagerModule {
}
