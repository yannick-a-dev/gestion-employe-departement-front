import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEmployeesComponent } from './gestion-employees.component';

describe('GestionEmployeesComponent', () => {
  let component: GestionEmployeesComponent;
  let fixture: ComponentFixture<GestionEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionEmployeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
