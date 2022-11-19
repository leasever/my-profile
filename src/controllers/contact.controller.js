import views from "../views/contact.html?raw";

export default () => {
  const container = document.createElement("div");
  container.className = "container";
  container.innerHTML = views;

  const btnclick = container.querySelector("#btnClick");
  btnclick.addEventListener("click", () => {
    alert("Este es el contacto");
  });
  return container;
};
