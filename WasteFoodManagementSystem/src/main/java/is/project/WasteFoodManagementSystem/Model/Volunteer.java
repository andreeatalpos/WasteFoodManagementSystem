package is.project.WasteFoodManagementSystem.Model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.sql.Time;

@Data
@Entity
public class Volunteer {
    @Id
    private Long id;
    private Integer restaurantId;
    private Time startHour;
    private Time endHour;

}
