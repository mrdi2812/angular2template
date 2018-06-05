import {CanActivate} from '@angular/router';
import {Injectable} from '@angular/core';
import { CheckLoginService } from '../service/check-login.service';
@Injectable()
export class CheckLoginGuards implements CanActivate{
    constructor(private loginService : CheckLoginService){

    }
    canActivate(){
        return this.loginService.IsLogined();
    }
}