import { DepartmentComponent } from './department/department.component';
import { LoginComponent } from './login/login.component';
import { ConnectionComponent } from './connection/connection.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'department',
    component: DepartmentComponent,
  },
  {
    path: 'introduction',
    component: IntroductionComponent,
  },
  {
    path: 'connection',
    component: ConnectionComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
