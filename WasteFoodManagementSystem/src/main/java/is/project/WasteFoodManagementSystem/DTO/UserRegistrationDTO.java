package is.project.WasteFoodManagementSystem.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class UserRegistrationDTO {
    private Long Id;

    private String fullName;
    private String username;
    private String password;
    private String email;
    private String role;
    private Integer phoneNumber;
    private String status;
}
