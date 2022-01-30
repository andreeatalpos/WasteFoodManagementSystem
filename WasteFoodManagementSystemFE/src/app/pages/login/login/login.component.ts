import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../../services/authentication.service";
import {FormControl, FormGroup} from "@angular/forms";
import {User} from "../../../model/user";



@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    user = new User();
    // public form: FormGroup = this.createFrom();


    errorMessage="Invalid credentials!";
    invalidLogin = false;
    constructor(private router: Router,
                private authenticationService: AuthenticationService) { }

    ngOnInit(): void {
    }

    loginUser(){
        this.authenticationService.loginUser(this.user).subscribe(
            data => this.router.navigate([this.user.role]),
            error => this.invalidLogin=true
        )

    }

    registerUser(){
        this.authenticationService.registerUser(this.user).subscribe(
            data => this.router.navigate([this.user.role]),
        )
        this.user.status="Pending";
    }


}
