package is.project.WasteFoodManagementSystem.Service;

import is.project.WasteFoodManagementSystem.DTO.UserRegistrationDTO;
import is.project.WasteFoodManagementSystem.Model.Users;
import is.project.WasteFoodManagementSystem.Repository.UsersRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    ModelMapper modelMapper;

    @Autowired
    private UsersRepository usersRepository;


    public Users registerUser(UserRegistrationDTO userRegistrationDTO) {
        Users toBeRegisteredEntity = modelMapper.map(userRegistrationDTO, Users.class);
        return usersRepository.save(toBeRegisteredEntity);
    }
}
