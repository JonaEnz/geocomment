package pls.change.that;

import io.quarkus.hibernate.orm.rest.data.panache.PanacheRepositoryResource;

import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public interface ThreadResource extends PanacheRepositoryResource<ThreadRepository, Thread, Long> {

}
