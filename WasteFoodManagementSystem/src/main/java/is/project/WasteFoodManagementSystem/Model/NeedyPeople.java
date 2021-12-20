package is.project.WasteFoodManagementSystem.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class NeedyPeople {
    @Id
    private Long id;

    private String fullName;
    private String address;
    private Integer monthlyGains;
    private Integer age;

}
