package is.project.WasteFoodManagementSystem;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@Bean(name="entityManagerFactory")
@SpringBootApplication
public class WasteFoodManagementSystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(WasteFoodManagementSystemApplication.class, args);
	}

}
