import Home from "./home.controller";
import NotFound from "./404.controller";
import Contact from "./contact.controller";
import Projects from "./projects.controller";

export const pages = {
  home: Home,
  contact: Contact,
  notFound: NotFound,
  projects: Projects,
};
