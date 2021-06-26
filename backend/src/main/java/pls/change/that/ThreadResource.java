package pls.change.that;

import org.eclipse.microprofile.jwt.JsonWebToken;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.SecurityContext;
import java.util.List;

@Path(Shared.RESOURCES_PATH_PREFIX+ "thread/")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@RequestScoped
public class ThreadResource {

    @Inject
    ThreadRepository threadRepository;

    // TODO where are tokens generated? How does register and login work (see UserResource)

    @Inject
    JsonWebToken jwt;

    @POST
    public Thread createThread(@Context SecurityContext context, Thread thread) {
        checkRole(context, "user");
        threadRepository.persist(thread);
        return thread;
    }

    @GET
    @Path("{threadId}")
    public Thread getThread(@Context SecurityContext context, @PathParam("threadId") Long tid) {
        checkRole(context, "user");
        return getThreadOrThrow(tid);
    }

    @GET
    @Path("{threadId}/comments/")
    public List<Comment> getComments(@Context SecurityContext context, @PathParam("threadId") Long tid) {
        checkRole(context, "user");
        Thread thread = getThreadOrThrow(tid);
        return thread.comments;
    }

    @POST
    @Path("{threadId}/comments/")
    public List<Comment> addComment(@Context SecurityContext context, @PathParam(
            "threadId") Long tid, Comment comment) {
        checkRole(context, "user");
        Thread thread = getThreadOrThrow(tid);
        thread.comments.add(comment);
        threadRepository.persist(thread);
        return thread.comments;
    }

    private Thread getThreadOrThrow(Long tid) {
        Thread thread = threadRepository.findById(tid);
        if (thread == null) {
            throw new WebApplicationException(Response.Status.NOT_FOUND);
        }
        return thread;
    }

    private void checkRole(SecurityContext context, String role) {
        if (!context.isUserInRole(role)) {
            throw new WebApplicationException(Response.Status.FORBIDDEN);
        }
    }

}
