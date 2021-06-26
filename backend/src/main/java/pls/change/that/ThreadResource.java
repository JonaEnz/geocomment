package pls.change.that;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("/thread/")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class ThreadResource {

    @Inject
    ThreadRepository threadRepository;

    @POST
    public Thread createThread(Thread thread) {
        threadRepository.persist(thread);
        return thread;
    }

    @GET
    @Path("{threadId}")
    public Thread getThread(@PathParam("threadId") Long tid) {
        return getThreadOrThrow(tid);
    }

    @GET
    @Path("{threadId}/comments/")
    public List<Comment> getComments(@PathParam("threadId") Long tid) {
        Thread thread = getThreadOrThrow(tid);
        return thread.comments;
    }

    @POST
    @Path("{threadId}/comments/")
    public List<Comment> addComment(@PathParam("threadId") Long tid, Comment comment) {
        Thread thread = getThreadOrThrow(tid);
        thread.comments.add(comment);
        threadRepository.persist(thread);
        return thread.comments;
    }

    private Thread getThreadOrThrow(Long tid) {
        Thread thread = threadRepository.findById(tid);
        if (thread == null) {
            throw new WebApplicationException(404);
        }
        return thread;
    }

}
