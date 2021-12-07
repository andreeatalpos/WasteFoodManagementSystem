package is.project.WasteFoodManagementSystem.Model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Data
@Entity
public class Food {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String plateType;
    private Integer quantity;
    private Date expirationDate;
    private String ingredients;
    private String allergens;

}
