import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Food} from "../../../../manager/interface/food";

const urls = {
    getFood: 'http://localhost:8085/food',
    postFood: 'http://localhost:8085/food',
    deleteFood: 'http://localhost:8085/deleteFood'
};

@Injectable({
  providedIn: 'root'
})
export class ExpiredService {

    constructor(
        private http: HttpClient
    ) {
    }

    public getFood() {
        return this.http.get<Food[]>(urls.getFood, {
            headers: {
                'Accept': 'application/json'
            }
        });
    }

    public addFood(food: Food) {
        return this.http.post(urls.postFood, food);
    }

    public deleteFood(ids: number[]) {
        return this.http.post(urls.deleteFood,ids,
            {headers: {'Accept': 'application/json'}})
    }
}
