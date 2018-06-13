import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.compoment';
import {FormsModule} from '@angular/forms';
import {ReverseStr} from './reverse-str.pipe';
import {UselessPipe} from './reverse-str.pipe';
import{EmployeeCompoment} from'./app.employee.compoment';
import {EmployeeService} from './service/app.employee.service';
import {HttpModule} from'@angular/http';
import { appRouters } from './app.router';
import { HomeConponent } from './home.component';
import { NotFoundComponent } from './notfound.component';
import { EmployeeDetailComponent } from './employee-detail.component';
import { EmployeeOverViewerComponent } from './employee-overview.component';
import { EmployeeProjectComponent } from './employee-project.component';
import { LoginComponent } from './login.component';
import { CheckLoginService } from './service/check-login.service';
import { CheckLoginGuards } from './guards/check-login.guards';
import { EmployeeEditComponent } from './employee-edit.component';
import { EmployeeAddComponent } from './employee-add.component';
@NgModule({
  imports:      [ BrowserModule,FormsModule,HttpModule,appRouters],
  declarations: [ 
    AppComponent,
    ReverseStr,
    UselessPipe,
    EmployeeCompoment,
    EmployeeEditComponent,
    HomeConponent,
    NotFoundComponent,
    EmployeeDetailComponent,
    EmployeeOverViewerComponent,
    EmployeeProjectComponent,
    LoginComponent,
    EmployeeAddComponent],
  providers : [EmployeeService,CheckLoginService,CheckLoginGuards],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }