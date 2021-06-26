package pls.change.that;

import javax.imageio.ImageIO;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriInfo;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.util.UUID;

@Path(Shared.RESOURCES_PATH_PREFIX + "image")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.MULTIPART_FORM_DATA)
public class ImageResource {

    private static final java.nio.file.Path STATIC_CONTENT = Paths.get("static/");

    @Context
    UriInfo uriInfo;

    @Inject
    ImageRepository imageRepository;

    @POST
    public Image upload(InputStream inputStream) {
        var uuid = UUID.randomUUID();
        var path = STATIC_CONTENT.resolve(uuid + ".jpg");
        BufferedImage bufferedImage = null;
        try {
            bufferedImage = ImageIO.read(inputStream);
        } catch (IOException e) {
            e.printStackTrace();
        }
        if (bufferedImage == null) {
            throw new WebApplicationException(Response.Status.BAD_REQUEST);
        }
        try {
            ImageIO.write(bufferedImage, "jpg", path.toFile());
        } catch (IOException e) {
            throw new WebApplicationException(e, Response.Status.INTERNAL_SERVER_ERROR);
        }
        Image image = new Image();
        image.url = uriInfo.getBaseUri().getPath() + path;
        image.timestamp = LocalDateTime.now();
        imageRepository.persist(image);
        return image;
    }
}
