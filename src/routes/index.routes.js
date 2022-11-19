import { pages } from "../controllers/index";
let main = document.querySelector("#main");

export const router = async (route) => {
  main.innerHTML = ``;
  history.replaceState({}, null, "/" + route);

  switch (route) {
    case "":
    case "#/":
      return main.appendChild(pages.home());
    case "#/proyectos":
      return main.appendChild(await pages.projects());
    case "#/cv":
      return null;
    case "#/contacto":
      return main.appendChild(pages.contact());
    default:
      return main.appendChild(pages.notFound());
  }
};
