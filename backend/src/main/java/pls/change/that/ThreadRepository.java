package pls.change.that;

import io.quarkus.hibernate.orm.panache.PanacheRepository;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class ThreadRepository implements PanacheRepository<Thread> {

    public Thread findByTitle(String title) {
        return find("title", title).firstResult();
    }

    public Thread findByLocation(Location location) {
        return find("location", location).firstResult();
    }

}
