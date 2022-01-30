package is.project.WasteFoodManagementSystem.Controller;

import is.project.WasteFoodManagementSystem.DTO.LoginCredentialsDTO;
import is.project.WasteFoodManagementSystem.DTO.UserRegistrationDTO;
import is.project.WasteFoodManagementSystem.Model.Users;
import is.project.WasteFoodManagementSystem.Service.LoginService;
import is.project.WasteFoodManagementSystem.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
//@RequestMapping("/login")
@CrossOrigin("*")
public class RegisterController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public Users registerUser(@RequestBody Users user) throws Exception {
        String tempEmail = user.getEmail();
        if(tempEmail!=null && !"".equals(tempEmail)) {
           Users userObj = userService.fetchUserByEmail(tempEmail);
           if(userObj != null) {
               throw new Exception("User with "+ tempEmail + " already exists!!");
           }
        }
        return userService.registerUser(user);
    }

    @PostMapping("/login")
    public Users loginUser(@RequestBody Users user) throws Exception {
        String tempUsername = user.getUsername();
        String tempPassword = user.getPassword();
        String tempRole = user.getRole();

        Users userObj = null;
        if(tempUsername != null && tempPassword != null && tempRole !=null) {
            userObj = userService.fetchUserByUsernameAndPasswordAndRole(tempUsername, tempPassword, tempRole);
        }
        if(userObj == null){
            throw new Exception("User " + tempUsername + " does not exists. Bad credentials!");
        }
        return userObj;

    }
}
