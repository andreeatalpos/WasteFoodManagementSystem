package is.project.WasteFoodManagementSystem.Model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@Entity
public class Restaurant {
    @Id
    private Long id;
    private String name;
    private String address;
    private Integer managerId;
}
