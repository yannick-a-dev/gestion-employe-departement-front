import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private httpClient: HttpClient) { }

  getEmployees(): Observable<any>{
    return this.httpClient.get<any>(`${environment.apiUrl}/${environment.prefix}/employees`);
  }

  postEmployees(data: any): Observable<any>{
    return this.httpClient.post<any>(`${environment.apiUrl}/${environment.prefix}/employees`,data)
  }

  getEmployee(employeeId: number): Observable<any>{
     return this.httpClient.get<any>(`${environment.apiUrl}/${environment.prefix}/employees/${employeeId}`);
  }

  getEmployeesByDepartement(departementId: number): Observable<any[]>{
    return this.httpClient.get<any[]>(`${environment.apiUrl}/${environment.prefix}/employees/by/${departementId}`);
  }

  getEmployeesByPagination(params: any): Observable<any>{
    return this.httpClient.get<any>(`${environment.apiUrl}/${environment.prefix}/employees/paging`, {params});
  }

  deleteEmployee(id: any): Observable<any>{
    return this.httpClient.delete<any>(`${environment.apiUrl}/${environment.prefix}/employees/delete/${id}`);
  }

  updateEMployee(data: any, id:number): Observable<any>{
    return this.httpClient.put<any>(`${environment.apiUrl}/${environment.prefix}/employees/update/${id}`,{data});
  }
}

