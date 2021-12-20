package is.project.WasteFoodManagementSystem;

import is.project.WasteFoodManagementSystem.Repository.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class WasteFoodManagementSystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(WasteFoodManagementSystemApplication.class, args);
	}

	@Bean
	CommandLineRunner init(FoodRepository foodRepository, NeedyPeopleRepository needyPeopleRepository, RestaurantRepository restaurantRepository, UsersRepository usersRepository, VolunteerRepository volunteerRepository){
		return args ->{

		};
	}

}
