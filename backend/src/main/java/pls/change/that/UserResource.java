package pls.change.that;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.Collections;
import java.util.List;

@Path("")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class UserResource {

    @Inject
    UserRepository userRepository;

    @Inject
    ThreadRepository threadRepository;

    // TODO login endpoint, other user endpoints, logout??

    @POST
    @Path("register")
    public User register(User user) {
        System.out.println(user);
        userRepository.persist(user);
        return user;
    }

    @GET
    @Path("user/{id}/comments")
    public List<Comment> userComments(@PathParam("id") Long id) {
        // TODO filter comments
        // threadRepository.find()
        return Collections.emptyList();
    }
}
