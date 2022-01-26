import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutModule} from "./layout/layout.module";
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login/login.component';
import {FormsModule} from "@angular/forms";
import {LogoutComponent} from "./pages/login/logout/logout.component";
import { VolunteerComponent } from './pages/volunteer/volunteer.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        LogoutComponent,
        VolunteerComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        LayoutModule,
        BrowserAnimationsModule,
        FormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
