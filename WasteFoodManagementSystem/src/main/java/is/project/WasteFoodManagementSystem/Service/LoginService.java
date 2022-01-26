package is.project.WasteFoodManagementSystem.Service;

import is.project.WasteFoodManagementSystem.DTO.LoginCredentialsDTO;
import is.project.WasteFoodManagementSystem.DTO.UserRegistrationDTO;
import is.project.WasteFoodManagementSystem.Model.Users;
import is.project.WasteFoodManagementSystem.Repository.UsersRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class LoginService {

    @Autowired
    private UsersRepository usersRepository;

    public Users getUserByEmail(String email) {
        return usersRepository.findByEmail(email);
    }

    public Users checkCredentials(LoginCredentialsDTO loginCredentials) {
        if(this.usersRepository.findUsersByUsernameAndPassword(loginCredentials.getUsername(), loginCredentials.getPassword())!=null) {
            return this.usersRepository.findUsersByUsernameAndPassword(loginCredentials.getUsername(), loginCredentials.getPassword());
        }
        return null;
    }
}

