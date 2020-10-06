import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form.component';

const routes: Routes = [
  {
    path: '',
    component: FormComponent
  },
  {
    path:'football',
    loadChildren: () => import('../football/football.module').then(m=>m.FootballModule)
  },
  {
    path:'about',
    loadChildren: () => import('../about/about.module').then(m=>m.AboutModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
