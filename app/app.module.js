"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_compoment_1 = require("./app.compoment");
var forms_1 = require("@angular/forms");
var reverse_str_pipe_1 = require("./reverse-str.pipe");
var reverse_str_pipe_2 = require("./reverse-str.pipe");
var app_employee_compoment_1 = require("./app.employee.compoment");
var app_employee_service_1 = require("./service/app.employee.service");
var http_1 = require("@angular/http");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule],
            declarations: [app_compoment_1.AppComponent, reverse_str_pipe_1.ReverseStr, reverse_str_pipe_2.UselessPipe, app_employee_compoment_1.EmployeeCompoment],
            providers: [app_employee_service_1.EmployeeService],
            bootstrap: [app_compoment_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map