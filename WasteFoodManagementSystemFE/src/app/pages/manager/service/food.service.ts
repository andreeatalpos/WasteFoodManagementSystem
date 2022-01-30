import {Injectable} from '@angular/core';
import {Food} from "../interface/food";
import {HttpClient} from "@angular/common/http";

const urls = {
    getFood: 'http://localhost:8085/food',
    postFood: 'http://localhost:8085/food'
};

@Injectable({
    providedIn: 'root'
})
export class FoodService {

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
}

