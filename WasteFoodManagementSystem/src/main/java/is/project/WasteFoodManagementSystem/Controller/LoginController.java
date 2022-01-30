package is.project.WasteFoodManagementSystem.Controller;

import is.project.WasteFoodManagementSystem.DTO.LoginCredentialsDTO;
import is.project.WasteFoodManagementSystem.Model.Users;
import is.project.WasteFoodManagementSystem.Service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
//@RequestMapping("/login")
@CrossOrigin("*")
public class LoginController {

    @Autowired
    LoginService loginService;

   // @GetMapping("/login")
//    public Users login(LoginCredentialsDTO loginCredentials) {
//        return loginService.checkCredentials(loginCredentials);
//    }
}
