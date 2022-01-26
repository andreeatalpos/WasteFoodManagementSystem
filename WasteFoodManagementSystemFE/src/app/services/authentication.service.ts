import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    constructor() { }

    authenticate(username:string, password:string) {
        // console.log('inainte' + this.isUserLoggedIn());
        if (username === "admin" && password === "admin") {
            sessionStorage.setItem('authenticatedUser', username);
            // console.log('dupa' + this.isUserLoggedIn());
            return true;
        } else {
            return false;
        }
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem('authenticatedUser')
        return !(user === null);
    }
    logout(){
        sessionStorage.removeItem('authenticatedUser');
    }
}
