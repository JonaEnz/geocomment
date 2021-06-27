package pls.change.that.repository;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import pls.change.that.model.Image;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class ImageRepository implements PanacheRepository<Image> {
}
