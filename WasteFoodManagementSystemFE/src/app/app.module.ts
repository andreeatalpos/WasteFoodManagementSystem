import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutModule} from "./layout/layout.module";
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LogoutComponent} from "./pages/login/logout/logout.component";
import { VolunteerComponent } from './pages/volunteer/volunteer.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import { SchedulerDialogComponent } from './pages/volunteer/scheduler-dialog/scheduler-dialog.component';
import { PackagesDialogComponent } from './pages/volunteer/packages-dialog/packages-dialog.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatTableModule} from "@angular/material/table";
import { NeedypeopleDialogComponent } from './pages/volunteer/needypeople-dialog/needypeople-dialog.component';


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        LogoutComponent,
        VolunteerComponent,
        SchedulerDialogComponent,
        PackagesDialogComponent,
        NeedypeopleDialogComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        LayoutModule,
        BrowserAnimationsModule,
        FormsModule,
        MatFormFieldModule,
        MatDialogModule,
        ReactiveFormsModule,
        MatInputModule,
        MatCheckboxModule,
        MatTableModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
