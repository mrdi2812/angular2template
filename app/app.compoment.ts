import { Component, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router} from '@angular/router';
import { CheckLoginService } from './service/check-login.service';
@Component({
  selector: 'my-app',
  templateUrl:'app/app.compoment.html',
  styleUrls:['app/app.compoment.css'],
})
export class AppComponent {
  public _isLogined : boolean;
  constructor(private router : Router,private loginService : CheckLoginService){

  }
  Logout(){
    this.loginService.SetLogined(false);
    this.router.navigate(['login']);
  }
}