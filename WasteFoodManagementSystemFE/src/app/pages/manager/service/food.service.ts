import {Injectable} from '@angular/core';
import {Food} from "../interface/food";
import {HttpClient} from "@angular/common/http";

const urls = {
    getFood: '/assets/mockedData/food.json',
    postFood: ''
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
        return this.http.get<Food[]>(urls.getFood);
    }

    public addFood(food: Food) {
        return this.http.post(urls.postFood, food);
    }
}

