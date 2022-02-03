package is.project.WasteFoodManagementSystem.Service;

import is.project.WasteFoodManagementSystem.DTO.FoodDTO;
import is.project.WasteFoodManagementSystem.Model.Food;
import is.project.WasteFoodManagementSystem.Model.Users;
import is.project.WasteFoodManagementSystem.Repository.FoodRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class FoodService {

    @Autowired
    FoodRepository foodRepository;

    ModelMapper modelMapper;

    public FoodService() {
        this.modelMapper = new ModelMapper();
    }

    public List<Food> findAllFood() {
        List<Food> allFood = new ArrayList<>();
        foodRepository.findAll().forEach(allFood::add);
        System.out.println("ALL FOOD ---> " + allFood);
        return allFood;
    }

    public void addFood(Food food) {
       // System.out.println(food);
        foodRepository.save(food);
    }

    public void deleteFood(ArrayList<Long> ids) {
        for(int i = 0; i < ids.size(); i++) {
            foodRepository.deleteById(ids.get(i));
        }
    }
}
