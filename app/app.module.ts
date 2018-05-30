import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.compoment';
import {FormsModule} from '@angular/forms';
import {ReverseStr} from './reverse-str.pipe';
import {UselessPipe} from './reverse-str.pipe';
import{EmployeeCompoment} from'./app.employee.compoment';
import {EmployeeService} from './service/app.employee.service';
import {HttpModule} from'@angular/http';
@NgModule({
  imports:      [ BrowserModule,FormsModule,HttpModule],
  declarations: [ AppComponent,ReverseStr,UselessPipe,EmployeeCompoment],
  providers : [EmployeeService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }