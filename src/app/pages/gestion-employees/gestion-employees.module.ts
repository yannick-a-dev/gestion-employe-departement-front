import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionEmployeesRoutingModule } from './gestion-employees-routing.module';
import { GestionEmployeesComponent } from './gestion-employees.component';
import { ListComponent } from './list/list.component';
import { EmployeesService } from 'src/app/services/employees.service';
import { AddComponent } from './add/add.component';
import { DepartementService } from 'src/app/services/departement.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    GestionEmployeesComponent,
    ListComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    GestionEmployeesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule
  ], providers: [EmployeesService, DepartementService]
})
export class GestionEmployeesModule { }
