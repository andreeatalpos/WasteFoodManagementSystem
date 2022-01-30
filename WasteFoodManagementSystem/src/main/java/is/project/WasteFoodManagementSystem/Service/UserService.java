package is.project.WasteFoodManagementSystem.Service;

import is.project.WasteFoodManagementSystem.DTO.UserRegistrationDTO;
import is.project.WasteFoodManagementSystem.Model.Users;
import is.project.WasteFoodManagementSystem.Repository.UsersRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {

    @Autowired
    private UsersRepository usersRepository;

    public Users registerUser(Users user) {
        return usersRepository.save(user);
    }

    public Users fetchUserByEmail(String email) {
        return usersRepository.findByEmail(email);
    }

    public Users fetchUserByUsernameAndPasswordAndRole(String username, String password, String role) {
        return usersRepository.findUsersByUsernameAndPasswordAndRole(username, password, role);
    }

    public List<Users> findAllUsers() {
        List<Users> allUsers = new ArrayList<>();
        usersRepository.findAll().forEach(allUsers::add);
        return allUsers;
    }

    public void deleteUsers(ArrayList<Long> ids) {
        for(int i = 0; i < ids.size(); i++) {
            usersRepository.deleteById(ids.get(i));
        }
    }
}
