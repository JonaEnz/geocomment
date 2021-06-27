package pls.change.that.model;

import io.smallrye.common.constraint.Nullable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
public class Comment {
    @Id @GeneratedValue public Long id;
    public UUID authorId;
    public String content;
    public LocalDateTime timestamp;
    @OneToOne
    @Nullable
    public Image image;
    public int upvotes;
    public int downvotes;
}
