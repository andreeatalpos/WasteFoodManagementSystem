import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Food} from "../../../../manager/interface/food";

const urls = {
    getFood: 'http://localhost:8080/food',
    postFood: ''
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

    public deleteFood(food: Food[]) {
        return this.http.post(urls.postFood, food);
    }
}
