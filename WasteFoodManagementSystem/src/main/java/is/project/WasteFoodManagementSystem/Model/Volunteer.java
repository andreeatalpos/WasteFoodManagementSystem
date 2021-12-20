package is.project.WasteFoodManagementSystem.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.sql.Time;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Volunteer {
    @Id
    private Long id;
    private Integer restaurantId;
    private Time startHour;
    private Time endHour;

}
