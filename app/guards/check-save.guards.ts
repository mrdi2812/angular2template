import{CanDeactivate} from'@angular/router';
import { Injectable } from '@angular/core';
import { EmployeeDetailComponent } from '../employee-detail.component';
@Injectable()
export class CheckSaveGuards implements CanDeactivate<EmployeeDetailComponent> {
   canDeactivate(component:EmployeeDetailComponent){
       alert("Vui lòng save dữ liệu trước khi thoát khỏi trang");
       return false;
   }
}