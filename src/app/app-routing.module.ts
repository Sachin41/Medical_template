import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import { RoleGuardService as RoleGuard} from './services/role-guard.service';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {                                       
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },{
     path: 'login',
     component: LoginComponent
  },

 {
  path: 'home',
  component: HomeComponent,
  data: {
    title: 'Home'
  },
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
