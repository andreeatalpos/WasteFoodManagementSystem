import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../../services/authentication.service";



@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    username = "admin";
    password = "";
    email = "";
    errorMessage="Invalid credentials!";
    invalidLogin = false;
    constructor(private router: Router,
                private authenticationService: AuthenticationService) { }

    ngOnInit(): void {
    }

    handleLogin() {
        if(this.authenticationService.authenticate(this.username, this.password)) {
            this.router.navigate(['volunteer'])
            this.invalidLogin = false;
            //Redirect to another page
        }
        else {
            this.invalidLogin = true;
        }
    }

}
