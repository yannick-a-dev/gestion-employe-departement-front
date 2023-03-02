import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GestionDepartementRoutingModule } from './gestion-departement-routing.module';
import { GestionDepartementComponent } from './gestion-departement.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GestionDepartementComponent,
    ListComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    GestionDepartementRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class GestionDepartementModule { }
