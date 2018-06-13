import {Component, OnInit,OnDestroy} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import {EmployeeService} from './service/app.employee.service';
@Component({
    selector: 'employee-edit',
    templateUrl:'./app/employee-edit.component.html'
})
export class EmployeeEditComponent implements OnInit,OnDestroy {
    public _id :number;
    public subscription :Subscription;
    public employee :any;
    constructor(private router : Router,private activateRouter : ActivatedRoute,private employeeService : EmployeeService){
        
    }
    ngOnInit(){
        this.subscription = this.activateRouter.params.subscribe(params=>{
            this._id = params['id'];         
        });
        this.employeeService.GetDetail(this._id).subscribe((response:any)=>{
            this.employee = response;
        },error=>{
            console.log("Lỗi không load được dữ liệu nguồn");
        });
    }
    GoBlack(){
        this.router.navigate(["employees"]);
    } 
    SaveForm(){
        this.employeeService.UpdateData(this.employee).subscribe(response=>{
            if(response){
                alert("Lưu thành công");
                this.router.navigate(['employees']);
            }
        });
    }
    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
}