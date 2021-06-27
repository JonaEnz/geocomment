package pls.change.that.repository;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import pls.change.that.model.User;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class UserRepository implements PanacheRepository<User> {

}
