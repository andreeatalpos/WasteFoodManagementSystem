package is.project.WasteFoodManagementSystem.Repository;

import is.project.WasteFoodManagementSystem.Model.NeedyPeople;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NeedyPeopleRepository extends JpaRepository<NeedyPeople, Long> {
}
