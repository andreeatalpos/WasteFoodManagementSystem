package is.project.WasteFoodManagementSystem.Repository;

import is.project.WasteFoodManagementSystem.Model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepository extends JpaRepository<Users, Long> {
    Users findByEmail(String email);
    Users findUsersById(Long Id);
    Users findUsersByUsernameAndPasswordAndRole(String username, String password, String role);
}
