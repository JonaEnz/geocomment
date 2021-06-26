package pls.change.that;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
public class Post {
    @Id @GeneratedValue public Long id;
    public UUID authorId;
    public Comment comment;
    public Image image;
    public LocalDateTime timestamp;
    public int upVotes;
    public int downVotes;
}