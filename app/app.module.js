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
var app_router_1 = require("./app.router");
var home_component_1 = require("./home.component");
var notfound_component_1 = require("./notfound.component");
var employee_detail_component_1 = require("./employee-detail.component");
var employee_overview_component_1 = require("./employee-overview.component");
var employee_project_component_1 = require("./employee-project.component");
var login_component_1 = require("./login.component");
var check_login_service_1 = require("./service/check-login.service");
var check_login_guards_1 = require("./guards/check-login.guards");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, app_router_1.appRouters],
            declarations: [
                app_compoment_1.AppComponent,
                reverse_str_pipe_1.ReverseStr,
                reverse_str_pipe_2.UselessPipe,
                app_employee_compoment_1.EmployeeCompoment,
                home_component_1.HomeConponent,
                notfound_component_1.NotFoundComponent,
                employee_detail_component_1.EmployeeDetailComponent,
                employee_overview_component_1.EmployeeOverViewerComponent,
                employee_project_component_1.EmployeeProjectComponent,
                login_component_1.LoginComponent
            ],
            providers: [app_employee_service_1.EmployeeService, check_login_service_1.CheckLoginService, check_login_guards_1.CheckLoginGuards],
            bootstrap: [app_compoment_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map