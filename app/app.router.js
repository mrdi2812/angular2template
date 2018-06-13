"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./home.component");
var app_employee_compoment_1 = require("./app.employee.compoment");
var notfound_component_1 = require("./notfound.component");
var employee_detail_component_1 = require("./employee-detail.component");
var employee_overview_component_1 = require("./employee-overview.component");
var employee_project_component_1 = require("./employee-project.component");
var login_component_1 = require("./login.component");
var employee_edit_component_1 = require("./employee-edit.component");
var employee_add_component_1 = require("./employee-add.component");
var routing = [
    { path: '', component: home_component_1.HomeConponent },
    { path: 'employees', component: app_employee_compoment_1.EmployeeCompoment },
    { path: 'employee-add', component: employee_add_component_1.EmployeeAddComponent },
    { path: 'employee-edit/:id', component: employee_edit_component_1.EmployeeEditComponent },
    { path: 'employee-detail/:id', component: employee_detail_component_1.EmployeeDetailComponent, children: [
            { path: 'overview', component: employee_overview_component_1.EmployeeOverViewerComponent },
            { path: 'project', component: employee_project_component_1.EmployeeProjectComponent }
        ] },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: '**', component: notfound_component_1.NotFoundComponent }
];
exports.appRouters = router_1.RouterModule.forRoot(routing);
//# sourceMappingURL=app.router.js.map