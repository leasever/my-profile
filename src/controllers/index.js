import Home from "./home.controller";
import NotFound from "./404.controller";
import Contacto from "./contacto.controller";
import Proyectos from "./proyectos.controller";

export const pages = {
  home: Home,
  contacto: Contacto,
  notFound: NotFound,
  proyectos: Proyectos,
};
