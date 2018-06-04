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
var EmployeeDetailComponent = /** @class */ (function () {
    function EmployeeDetailComponent(router, activateRouter, employeeService) {
        this.router = router;
        this.activateRouter = activateRouter;
        this.employeeService = employeeService;
    }
    EmployeeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.activateRouter.params.subscribe(function (params) {
            _this._id = params['id'];
            _this.employeeService.GetDetail(_this._id).subscribe(function (response) {
                _this.employeedetail = response;
            }, function (error) {
                console.log("Lỗi không load được dữ liệu nguồn");
            });
        });
    };
    EmployeeDetailComponent.prototype.Go = function () {
        this.router.navigate(["employee"]);
    };
    EmployeeDetailComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    EmployeeDetailComponent = __decorate([
        core_1.Component({
            selector: 'employee-detail',
            templateUrl: './app/employee-detail.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, app_employee_service_1.EmployeeService])
    ], EmployeeDetailComponent);
    return EmployeeDetailComponent;
}());
exports.EmployeeDetailComponent = EmployeeDetailComponent;
//# sourceMappingURL=employee-detail.component.js.map