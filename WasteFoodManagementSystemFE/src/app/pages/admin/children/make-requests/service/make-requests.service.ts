import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Users} from "../interface/users";

const urls = {
    getUsers: 'http://localhost:8085/users',
    deleteUsers: 'http://localhost:8085/delete'
};

@Injectable({
  providedIn: 'root'
})
export class MakeRequestsService {

    constructor(
        private http: HttpClient
    ) {
    }

    public getUsers() {
        return this.http.get<Users[]>(urls.getUsers, {
            headers: {
                'Accept': 'application/json'
            }
        });
    }

    public deleteUsers(ids: number[]) {
        return this.http.post(urls.deleteUsers,ids,
            {headers: {'Accept': 'application/json'}})
    }
}
