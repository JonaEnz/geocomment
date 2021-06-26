package pls.change.that;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.WebApplicationException;
import java.util.List;

@Path("/thread/")
@Produces("application/hal+json")
@Consumes("application/hal+json")
public class ThreadResource {

    @Inject
    ThreadRepository threadRepository;
    @Inject
    CommentRepository commentRepository;

    @GET
    @Path("{threadId}")
    public Thread getThread(@PathParam("threadId") Long tid) {
        return threadRepository.findById(tid);
    }

    @GET
    @Path("{threadId}/comments/")
    public List<Comment> getComments(@PathParam("threadId") Long tid) {
        Thread thread = getThreadOrThrow(tid);
        return commentRepository.list("thread = ?1", thread);
    }

/*    @POST
    @Path("{threadId}/comments/")
    public List<Comment> addComment(@PathParam("threadId") Long tid, Comment comment) {
        Thread thread = getThreadOrThrow(tid);
    }*/

    private Thread getThreadOrThrow(Long tid) {
        Thread thread = threadRepository.findById(tid);
        if (thread == null) {
            throw new WebApplicationException(404);
        }
        return thread;
    }

}
