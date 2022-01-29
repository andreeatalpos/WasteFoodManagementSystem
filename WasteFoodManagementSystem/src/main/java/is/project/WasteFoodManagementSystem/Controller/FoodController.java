package is.project.WasteFoodManagementSystem.Controller;

import is.project.WasteFoodManagementSystem.Model.Food;
import is.project.WasteFoodManagementSystem.Service.FoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class FoodController {
    @Autowired
    private FoodService foodService;

    @GetMapping(value = "/food")
    public List<Food> getFood() {
        List<Food> allFood = this.foodService.findAllFood();
        return allFood;
    }

}
