import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

    isUserLoggedIn: boolean = false;
    constructor(public authenticationService: AuthenticationService) { }

    ngOnInit(): void {
        this.isUserLoggedIn = this.authenticationService.isUserLoggedIn();
    }


}
