import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class UserDataService implements OnInit{
 
  employeeChanged = new Subject<Employee[]>();
  private employee: Employee[]=[];

  constructor( private http: HttpClient ) { }

  ngOnInit(){
    this.getlocalStorageData();
  }

  add(employee: Employee) {
    this.employee.push(employee);
    this.employeeChanged.next(this.employee.slice());
    this.saveEmployee();
  }

  getEmployees() {
    return this.employee.slice();
  }

  getEmployeeDetails(id: number) : Observable<any>{
    return this.http.get('${baseUrl}/${id}');
  }

  deleteEmployee(index: number){
    this.employee.splice(index, 1);
    this.employeeChanged.next(this.employee.slice());
  }

  saveEmployee(){
    localStorage.setItem('employee', JSON.stringify(this.employee));
    
  }

  getlocalStorageData(){
    if(localStorage.getItem('employee')===null){
      this.employee = [];
    }else{
        this.employee = JSON.parse(localStorage.getItem('employee'));
    }
  }

}
