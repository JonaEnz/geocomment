package pls.change.that;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
public class Thread {
    @Id
    @GeneratedValue
    public Long id;
    public String title;
    public Location location;
    @OneToMany
    @JsonIgnore
    public List<Comment> comments;
}
