import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionEmployeesComponent } from './gestion-employees.component';

const routes: Routes = [
  {
    path:'',
    component: GestionEmployeesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionEmployeesRoutingModule { }
