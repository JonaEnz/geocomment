package pls.change.that.repository;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import pls.change.that.model.Location;
import pls.change.that.model.Thread;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class ThreadRepository implements PanacheRepository<Thread> {

    public Thread findById(Long id) {
        return find("id", id).firstResult();
    }

    public Thread findByTitle(String title) {
        return find("title", title).firstResult();
    }

    public Thread findByLocation(Location location) {
        return find("location", location).firstResult();
    }

}
