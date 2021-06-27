package pls.change.that.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.LocalDateTime;

@Entity
public class Image {
    @Id @GeneratedValue public Long id;
    public String url;
    public LocalDateTime timestamp;
}