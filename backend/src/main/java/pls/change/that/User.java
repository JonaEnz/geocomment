package pls.change.that;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

// TODO what is needed? What is sent to the user?

@Entity
public class User {
    @Id @GeneratedValue
    Long id;
    public String email;
    public String password;
}
