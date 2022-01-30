package is.project.WasteFoodManagementSystem.Repository;


import is.project.WasteFoodManagementSystem.Model.Food;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface FoodRepository extends CrudRepository<Food, Long> {

}
