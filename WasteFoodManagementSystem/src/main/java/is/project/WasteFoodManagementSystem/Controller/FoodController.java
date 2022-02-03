package is.project.WasteFoodManagementSystem.Controller;

import is.project.WasteFoodManagementSystem.DTO.FoodDTO;
import is.project.WasteFoodManagementSystem.Model.Food;
import is.project.WasteFoodManagementSystem.Service.FoodService;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Data
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class FoodController {

    @Autowired
    private FoodService foodService;

//    @Autowired
//    public FoodController() {
//        this.foodService = new FoodService();
//    }
    @GetMapping(value = "/food")
    public List<Food> getFood() {
        List<Food> allFood = this.foodService.findAllFood();
        return allFood;
    }

    @PostMapping(value = "/food")
    public ResponseEntity<String> addFood(@RequestBody Food food) {
        foodService.addFood(food);
        return new ResponseEntity<>("Food added successfully", HttpStatus.OK);
    }

    @PostMapping(value = "/deleteFood")
    public void deleteFood(@RequestBody ArrayList<Long> ids) {
        foodService.deleteFood(ids);
    }

}
