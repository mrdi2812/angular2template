import {Component, OnInit,OnDestroy} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import {EmployeeService} from './service/app.employee.service';
@Component({
    selector: 'employee-add',
    templateUrl:'./app/employee-add.component.html'
})
export class EmployeeAddComponent implements OnInit {
    public _id :number;
    public subscription :Subscription;
    public employee :any;
    constructor(private router : Router,private activateRouter : ActivatedRoute,private employeeService : EmployeeService){
        
    }
    ngOnInit(){
       this.employee = {};
    }
    GoBlack(){
        this.router.navigate(["employees"]);
    } 
    SaveForm(){
        this.employeeService.AddData(this.employee).subscribe(response=>{
            if(response){
                alert("Thêm thành công");
                this.router.navigate(['employees']);
            }
        });
    }
}