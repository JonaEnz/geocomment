package pls.change.that;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.awt.image.BufferedImage;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
public class Image {
    @Id @GeneratedValue public Long id;
    public UUID authorId;
    public BufferedImage image;
    public LocalDateTime timestamp;
}