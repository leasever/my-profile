import views from "../views/home.html?raw";
import { Popover } from "../components/Popover";
import projectDss from "../data/projectDss.json";
export default () => {
  const container = document.createElement("div");
  container.innerHTML = views;

  const logosClientDss = container.querySelector("#logosClientDss");
  // const logosAdmDss = container.querySelector("#logosAdmDss");

  logosClientDss.innerHTML = Popover(projectDss);
  // logosAdmDss.innerHTML = Popover(projectDss);
  return container;
};
