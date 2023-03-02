import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  constructor(private httpClient: HttpClient) { }

  getListDepartement(): Observable<any>{
    return this.httpClient.get<any>(`${environment.apiUrl}/${environment.prefix}/departements`);
  }

  postDepartements(data: any): Observable<any>{
    return this.httpClient.post<any>(`${environment.apiUrl}/${environment.prefix}/departements`,data);
  }
  getOneDepartement(id: number): Observable<any>{
    return this.httpClient.get<any>(`${environment.apiUrl}/${environment.prefix}/departements/${id}`);
  }

}
