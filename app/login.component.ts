import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './service/login.service';
@Component({
    selector: 'login-component',
    templateUrl: './app/login.component.html'
})
export class LoginComponent {
    constructor(private router: Router, private logginService: LoginService) {

    }
    CheckLogin(value: any) {
        console.log(value);
        if (value.username == "admin" && value.password == "123") {
            this.logginService.SetLogin(true);
            this.router.navigate(['/']);
        }
        else {
            this.logginService.SetLogin(false);
        }

    }
}