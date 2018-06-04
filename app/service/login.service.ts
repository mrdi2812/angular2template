import {Injectable} from '@angular/core';
@Injectable()
export class LoginService{
    public _isLogined : boolean;
    IsLogined():boolean{
        return this._isLogined;
    }
    SetLogin(isLogined : boolean){
        this._isLogined = isLogined;
    }
}