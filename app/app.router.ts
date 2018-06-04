import {Routes,RouterModule} from '@angular/router';
import { HomeConponent } from './home.component';
import { EmployeeCompoment } from './app.employee.compoment';
import { NotFoundComponent } from './notfound.component';
import { EmployeeDetailComponent } from './employee-detail.component';
import { EmployeeOverViewerComponent } from './employee-overview.component';
import { EmployeeProjectComponent } from './employee-project.component';
import { LoginComponent } from './login.component';
import { CheckLoginGuards } from './guards/check-login.guards';
import { CheckSaveGuards } from './guards/check-save.guards';
const routing : Routes = [
    {path:'',component:HomeConponent},
    {path:'employee',component:EmployeeCompoment,canActivate:[CheckLoginGuards]},
    {path:'employee-detail/:id',component:EmployeeDetailComponent,canActivate:[CheckLoginGuards],canDeactivate:[CheckSaveGuards],children:[
        {path:'overview',component:EmployeeOverViewerComponent},
        {path:'project',component:EmployeeProjectComponent}
    ]},
    {path:'login',component:LoginComponent},
    {path:'**',component:NotFoundComponent}
]
export const appRouters = RouterModule.forRoot(routing);