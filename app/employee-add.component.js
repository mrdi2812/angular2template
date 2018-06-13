"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var app_employee_service_1 = require("./service/app.employee.service");
var EmployeeAddComponent = /** @class */ (function () {
    function EmployeeAddComponent(router, activateRouter, employeeService) {
        this.router = router;
        this.activateRouter = activateRouter;
        this.employeeService = employeeService;
    }
    EmployeeAddComponent.prototype.ngOnInit = function () {
        this.employee = {};
    };
    EmployeeAddComponent.prototype.GoBlack = function () {
        this.router.navigate(["employees"]);
    };
    EmployeeAddComponent.prototype.SaveForm = function () {
        var _this = this;
        this.employeeService.AddData(this.employee).subscribe(function (response) {
            if (response) {
                alert("Thêm thành công");
                _this.router.navigate(['employees']);
            }
        });
    };
    EmployeeAddComponent = __decorate([
        core_1.Component({
            selector: 'employee-add',
            templateUrl: './app/employee-add.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, app_employee_service_1.EmployeeService])
    ], EmployeeAddComponent);
    return EmployeeAddComponent;
}());
exports.EmployeeAddComponent = EmployeeAddComponent;
//# sourceMappingURL=employee-add.component.js.map