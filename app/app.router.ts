import {Routes,RouterModule} from '@angular/router';
import { HomeConponent } from './home.component';
import { EmployeeCompoment } from './app.employee.compoment';
import { NotFoundComponent } from './notfound.component';
import { EmployeeDetailComponent } from './employee-detail.component';
import { EmployeeOverViewerComponent } from './employee-overview.component';
import { EmployeeProjectComponent } from './employee-project.component';
const routing : Routes = [
    {path:'',component:HomeConponent},
    {path:'employee',component:EmployeeCompoment,canActivate:[CheckLoginGuards]},
    {path:'employee-detail/:id',component:EmployeeDetailComponent,canActivate:[CheckLoginGuards],canDeactivate:[CheckSaveGuards],children:[
        {path:'overview',component:EmployeeOverViewerComponent},
        {path:'project',component:EmployeeProjectComponent}
    ]},
    {path:'**',component:NotFoundComponent}
]
export const appRouters = RouterModule.forRoot(routing);