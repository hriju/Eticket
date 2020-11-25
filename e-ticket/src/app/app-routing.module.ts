import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent } from './components/admin/admin.component';
import {HomeComponent } from './components/home/home.component';
import {ViewBusinfoComponent } from './components/view-businfo/view-businfo.component';

const routes: Routes = [
  {
  path: 'busregistration',
  component: HomeComponent
  },
  {
    path: 'admin/view/:id',
    component: ViewBusinfoComponent
    },
  {
  path: 'admin',
  component: AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
