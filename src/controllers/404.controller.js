import views from "../views/404.html?raw";

export default () => {
  const container = document.createElement("div");
  container.className = "container";
  container.innerHTML = views;

  const btnclick = container.querySelector("#btnClick");
  btnclick.addEventListener("click", () => {
    
    alert("Este es el 404");
    window.history.back();
  });
  return container;
};
