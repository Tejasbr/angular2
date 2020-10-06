import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path:'register',
    loadChildren: () => import('./register/register.module').then(m=>m.RegisterModule)
  },
  {
    path:'submit',
    loadChildren: () => import('./form/form.module').then(m=>m.FormModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
