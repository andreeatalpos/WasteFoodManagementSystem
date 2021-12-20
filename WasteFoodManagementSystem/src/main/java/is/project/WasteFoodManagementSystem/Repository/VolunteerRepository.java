package is.project.WasteFoodManagementSystem.Repository;

import is.project.WasteFoodManagementSystem.Model.Volunteer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VolunteerRepository extends JpaRepository<Volunteer, Long> {
}
