import { Component, OnInit } from '@angular/core';
import { DepartementService } from 'src/app/services/departement.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{
  
  formEmployee: FormGroup;
  submitted: boolean = false;
  listDepartements: any[]= [];

  constructor(private employeeService: EmployeesService,private departmentService: DepartementService, private fb: FormBuilder){}

  ngOnInit(): void {
    this.getDepartment();
    this.formEmployee = this.fb.group({
      employeeFirstName: ['', Validators.required],
      employeeLastName: ['', Validators.required],
      employeePhone: ['', Validators.required],
      departementId: ['', Validators.required]
    })
  }

  getDepartment():void{
    this.departmentService.getListDepartement().subscribe(data => {
       this.listDepartements.push(...data);
    }, error => {
      console.log(error);
      
    })
  }

  get f(){
    return this.formEmployee.controls;
  }

  submit(): void{
    this.submitted = true;
    if(this.formEmployee.invalid){
      return;
    }else{
      //console.log(this.formEmployee.value);
      this.employeeService.postEmployees(this.formEmployee.value).subscribe(data => {
        this.formEmployee.reset();
        
      }, err => {
        console.log(err);
        
      })
    }
  }

}
