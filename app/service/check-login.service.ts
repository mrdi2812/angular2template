import {Injectable} from '@angular/core'; 
@Injectable()
export class CheckLoginService{
    public isLogined : boolean;
    IsLogined():boolean{
       return this.isLogined;
    }
    SetLogined(_isLogin : boolean){
        this.isLogined = _isLogin;
    }
}