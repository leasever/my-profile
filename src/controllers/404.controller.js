import views from "../views/404.html?raw";
import { router } from "../routes/index.routes";

export default () => {
  const container = document.createElement("div");
  container.className = "container";
  container.innerHTML = views;

  const btnclick = container.querySelector("#btnClick");
  btnclick.addEventListener("click", () => {
    router("");
    history.replaceState({}, null, "");
  });
  return container;
};
