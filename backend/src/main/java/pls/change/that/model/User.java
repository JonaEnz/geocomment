package pls.change.that.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.smallrye.common.constraint.Nullable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.LocalDateTime;

// TODO what is needed? What is sent to the user?

@Entity
public class User {
    @Id @GeneratedValue
    Long id;
    public String email;
    public String password;
    public boolean banned = false;
    public @Nullable LocalDateTime bannedUntil;
    private LocalDateTime joined;
    @JsonProperty("private")
    private boolean privateAccount;
}
