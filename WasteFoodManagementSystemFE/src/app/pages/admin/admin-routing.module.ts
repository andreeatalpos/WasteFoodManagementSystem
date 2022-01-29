import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from "./admin.component";
import {MakeRequestsComponent} from "./children/make-requests/make-requests.component";
import {AdminViewComponent} from "./admin-view/admin-view.component";
import {ExpiredFoodComponent} from "./children/expired-food/expired-food.component";

const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            {
                path: '',
                component: AdminViewComponent,
            },
            {
                path: 'requests',
                component: MakeRequestsComponent
            }, {
                path: 'food-quality',
                component: ExpiredFoodComponent
            }, {
                path: 'reports',
                component: MakeRequestsComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
