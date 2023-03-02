import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  CURRENTINDEX = -1;
  PAGE = 0;
  count = 0;
  PAGESIZE = 2;
  listEmployees: any = [];
  constructor(private employeeService: EmployeesService) { }

  ngOnInit(): void {
    this.getEmployeesPaging();
    //this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees().subscribe(data => {
      console.log(data);
      this.listEmployees.push(...data);
    }, error => console.log(error));
  }

  getRequestParams(page: number, pageSize: number): any {
    let params: any = {};
    if (page) {
      params['page'] = page - 1;
    }

    if (pageSize) {
      params['size'] = pageSize;
    }
    return params;
  }

  getEmployeesPaging(): void {
    const params = this.getRequestParams(this.PAGE, this.PAGESIZE);
    this.employeeService.getEmployeesByPagination(params).subscribe(response => {
      const { employees, totalItems } = response;
      this.listEmployees = employees;
      this.count = totalItems;
      console.log(employees);

    })
  }

  handlePageChange(event: number) {
    this.PAGE = event;
    this.getEmployeesPaging();
  }


  handleSizePageChange(event: any) {
    this.PAGESIZE = event.target.value;
    this.PAGE = 1;
    this.getEmployeesPaging();
  }

  onDelete = (employeeId: number) => {
    if (confirm('Are you sure you want to delete this employee')) {
      this.employeeService.deleteEmployee(employeeId).subscribe(response => {
        console.log("Suppression reussie!!!");
        this.getEmployeesPaging();

      }, error => console.log(error));
    }

  }

}
