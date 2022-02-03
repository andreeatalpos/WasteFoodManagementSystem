package is.project.WasteFoodManagementSystem.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Component
public class Food {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String plateType;

    @Column(nullable = false)
    private Integer quantity;

    @Column(nullable = false)
    private String expirationDate;

    @Column(nullable = false)
    private String ingredients;

    @Column(nullable = false)
    private String allergens;

}
