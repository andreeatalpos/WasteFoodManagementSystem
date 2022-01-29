import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./pages/login/login/login.component";
import {LogoutComponent} from "./pages/login/logout/logout.component";
import {RouteGuardService} from "./services/route-guard.service";
import {VolunteerComponent} from "./pages/volunteer/volunteer.component";

const routes: Routes = [
    {
        path: 'manager',
        loadChildren: () =>
            import('./pages/manager/manager.module').then((m) => m.ManagerModule),
    }, {
        path: 'admin',
        loadChildren: () =>
            import('./pages/admin/admin.module').then((m) => m.AdminModule),
    },
    {path:'login', component: LoginComponent},
    {path:'volunteer', component: VolunteerComponent, canActivate:[RouteGuardService]},
    {path:'logout', component: LogoutComponent, canActivate:[RouteGuardService]},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
