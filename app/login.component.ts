import {Component} from'@angular/core';
import { CheckLoginService } from './service/check-login.service';
import {Router} from '@angular/router';
@Component({
    selector : 'login-component',
    templateUrl:'./app/login.component.html'
})
export class LoginComponent{
    constructor(private loginService : CheckLoginService,private router : Router){

    }
    CheckLogin(value : any){
        if(value.username=="admin"&&value.password=="123"){
            this.loginService.SetLogined(true);
            this.router.navigate(['/']);
        }
        else{
            this.loginService.SetLogined(false);
        }
    }
}