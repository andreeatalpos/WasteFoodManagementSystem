package is.project.WasteFoodManagementSystem.Service;

import is.project.WasteFoodManagementSystem.Model.Food;
import is.project.WasteFoodManagementSystem.Repository.FoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class FoodService {
    @Autowired
    private FoodRepository foodRepository;

    public List<Food> findAllFood() {
        List<Food> allFood = new ArrayList<>();
        foodRepository.findAll().forEach(allFood::add);
        System.out.println("ALL FOOD ---> " + allFood);
        return allFood;
    }

    public void addFood(Food food) {
        foodRepository.save(food);
    }

    public void deleteFood(Long id) {
        foodRepository.deleteById(id);
    }
}
