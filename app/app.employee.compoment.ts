import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './service/app.employee.service';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'employee-list',
    templateUrl: './app/app.employee.compoment.html'
})
export class EmployeeCompoment implements OnInit {
    public employees: any[];
    public pages: number[];
    public indexPage: number;
    public fitter: string;
    constructor(private employeeService: EmployeeService, private activeRouter: ActivatedRoute) {

    }
    ngOnInit() {
        this.activeRouter.queryParams.subscribe(params => {
            this.indexPage = params['page'];
            this.fitter = params['fitter'];
            console.log(this.indexPage);
            console.log(this.fitter);
        })
        this.LoadData();
        this.pages = [1, 2, 3, 4, 5];
    }
    Delete(id: number) {
        let confirmResult = confirm("Bạn có muốn xóa không?");
        if (confirmResult) {
            this.employeeService.DeleteData(id).subscribe(response => {
                if (response) {
                    alert("Xóa thành công");
                    this.LoadData();
                }
            });
        }
    }
    LoadData() {
        this.employeeService.GetList().subscribe((response: any) => {
            this.employees = response;
        }, error => {
            console.log("Lỗi không load được dữ liệu nguồn");
        });
    }
    Seach(keyword:string){
        this.employeeService.SeachData(keyword).subscribe((response:any)=>{
            this.employees = response;
        },error=>{
            console.log("Không có dữ liệu");
        });
    }
}