package is.project.WasteFoodManagementSystem.Model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Data
public class Users {
    @Id
    private Long id;
    private String fullName;
    private String username;
    private String password;
    private String role;
    private Integer phoneNumber;

}
