import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AdminLayoutComponent} from "./shared/components/admin-layout/admin-layout.component";
import {LoginPageComponent} from "./login-page/login-page.component";
import {DashboardPageComponent} from "./dashboard-page/dashboard-page.component";
import {CreatePageComponent} from "./create-page/create-page.component";
import {EditPageComponent} from "./edit-page/edit-page.component";
import {AuthGuard} from "./shared/services/auth.guard";
import {RegisterComponent} from "./register/register.component";
import { ErrorComponent } from './../shared/components/error/error.component';


const AdminRoutes: Routes = [
  {
    path: '', component: AdminLayoutComponent, children: [
      {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
      {path: 'login', component: LoginPageComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthGuard]},
      {path: 'create', component: CreatePageComponent, canActivate: [AuthGuard]},
      {path: 'post/:id/edit', component: EditPageComponent, canActivate: [AuthGuard]},
    ]
  },
  { path: '**', component: ErrorComponent }

]

@NgModule({
  imports: [RouterModule.forChild(AdminRoutes)],
exports: [RouterModule]
})

export class AdminRoutingModule {

}
