package is.project.WasteFoodManagementSystem.Model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Data
public class NeedyPeople {
    @Id
    private Long id;

    private String fullName;
    private String address;
    private Integer monthlyGains;
    private Integer age;

}
