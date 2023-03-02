import { Component, OnInit } from '@angular/core';
import { DepartementService } from 'src/app/services/departement.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
 public departements: any[] = [];

  constructor(private depService: DepartementService){}
  
  ngOnInit(): void {
    this.loadListDepartements();
  }

  loadListDepartements(): void{
    this.depService.getListDepartement().subscribe(data => {
      this.departements.push(...data);
    }, err=> console.log(err));
  }
  
}
