package pls.change.that;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class Thread {
    @Id
    @GeneratedValue
    public Long id;
    public String title;
    @OneToOne
    public Comment initialComment;
}
