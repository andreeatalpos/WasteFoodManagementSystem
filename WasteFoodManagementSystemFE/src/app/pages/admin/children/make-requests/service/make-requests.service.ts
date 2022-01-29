import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Users} from "../interface/users";

const urls = {
    //getUsers: 'http://localhost:8080/users',
    postUsers: ''
};

@Injectable({
  providedIn: 'root'
})
export class MakeRequestsService {

    constructor(
        private http: HttpClient
    ) {
    }

    // public getUsers() {
    //     return this.http.get<Users[]>(urls.getUsers, {
    //         headers: {
    //             'Accept': 'application/json'
    //         }
    //     });
    // }
    //
    public deleteUsers(user: Users[]) {
        return this.http.post(urls.postUsers, user);
    }
}
