import {Component, OnInit,OnDestroy} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import {EmployeeService} from './service/app.employee.service';
@Component({
    selector: 'employee-detail',
    templateUrl:'./app/employee-detail.component.html'
})
export class EmployeeDetailComponent implements OnInit,OnDestroy {
    public _id :number;
    public subscription :Subscription;
    public employeedetail :any;
    constructor(private router : Router,private activateRouter : ActivatedRoute,private employeeService : EmployeeService){
        
    }
    ngOnInit(){
        this.subscription = this.activateRouter.params.subscribe(params=>{
            this._id = params['id'];
            this.employeeService.GetDetail(this._id).subscribe((response:any)=>{
                this.employeedetail = response;
            },error=>{
                console.log("Lỗi không load được dữ liệu nguồn");
            });
        })
    }
    Go(){
        this.router.navigate(["employee"]);
    } 
    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
}