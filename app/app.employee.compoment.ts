import{Component,OnInit} from'@angular/core';
import { EmployeeService } from './service/app.employee.service';
@Component({
    selector:'employee-list',
    templateUrl:'./app/app.employee.compoment.html'
})
export class EmployeeCompoment implements OnInit{
  public employees : any[];
  constructor(private employeeService : EmployeeService){   
    
  }
    ngOnInit(){
        this.employeeService.GetList().subscribe((response:any)=>{
            this.employees = response;
        },error=>{
            console.log("Lỗi không load được dữ liệu nguồn");
        });
    }
}