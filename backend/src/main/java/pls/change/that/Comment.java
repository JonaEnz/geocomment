package pls.change.that;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
public class Comment {
    @Id @GeneratedValue public Long id;
    public Long parentId;
    public UUID authorId;
    public String content;
    public LocalDateTime timestamp;
}
