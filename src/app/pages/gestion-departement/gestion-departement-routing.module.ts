import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionDepartementComponent } from './gestion-departement.component';

const routes: Routes = [
  {
    path:'',
    component:GestionDepartementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionDepartementRoutingModule { }
