import{Component,OnInit} from'@angular/core';
import { EmployeeService } from './service/app.employee.service';
import {ActivatedRoute} from '@angular/router';
@Component({
    selector:'employee-list',
    templateUrl:'./app/app.employee.compoment.html'
})
export class EmployeeCompoment implements OnInit{
  public employees : any[];
  public pages : number[];
  public indexPage : number;
  public fitter : string;
  constructor(private employeeService : EmployeeService,private activeRouter :ActivatedRoute){   
    
  }
    ngOnInit(){
        this.activeRouter.queryParams.subscribe(params=>{
            this.indexPage = params['page'];
            this.fitter = params['fitter'];
            console.log(this.indexPage);
            console.log(this.fitter);
        })
        this.employeeService.GetList().subscribe((response:any)=>{
            this.employees = response;
        },error=>{
            console.log("Lỗi không load được dữ liệu nguồn");
        });
        this.pages = [1,2,3,4,5];
    }
}