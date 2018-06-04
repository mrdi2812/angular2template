import { Component, ViewChild,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from './service/login.service';
import {Router} from '@angular/router';
@Component({
  selector: 'my-app',
  templateUrl:'app/app.compoment.html',
  styleUrls:['app/app.compoment.css'],
})
export class AppComponent implements OnInit {
  public _isLogined : boolean;
  constructor(private loginService : LoginService,private router : Router){

  }
  ngOnInit(){
    this._isLogined = this.loginService.IsLogined();
  }
 Logout(){
  this.loginService.SetLogin(false);
  alert("Logout assets")
  this.router.navigate(['login']);
 }
}