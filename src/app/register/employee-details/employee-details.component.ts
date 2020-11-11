import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/employee.model';
import { UserDataService } from 'src/app/user-data.service';

@Component({
    selector:"app-employee-details",
    templateUrl: "./employee-details.component.html",
    styleUrls: ["./employee-details.component.css"]
})
export class EmployeeDetailsComponent{

    id : number = 1;
    employee: Employee;
    constructor(private route: ActivatedRoute, private router : Router, private userdataservice: UserDataService)
    {}

    ngOnInit(){
        this.employee = new Employee();

        this.id = this.route.snapshot.params['id'];

        this.userdataservice.getEmployeeDetails(this.id)
            .subscribe(data=>{
                console.log(data)
                this.employee = data;
            }, error => console.log(error));
    }

    list(){
        this.router.navigate(['employee']);
    }
}