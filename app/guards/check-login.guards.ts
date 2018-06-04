import{CanActivate} from'@angular/router';
import {LoginService} from '../service/login.service';
import { Injectable } from '@angular/core';
@Injectable()
export class CheckLoginGuards implements CanActivate {
    constructor(private loginService:LoginService){

    }
   canActivate(){
       return this.loginService.IsLogined();
   }
}