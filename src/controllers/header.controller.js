import view from "../views/header.html?raw";
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
export const header = () => {
  const header = $("#header");
  header.innerHTML = view;

  let propMenu = {
    burgerMenu: $("#burgerMenu"),
    slideMenu: $("#slideMenu"),
    menuActive: false,
    elemMenu: $$("#slideMenu .menu a"),
    iconMenu: $("#iconMenu"),
  };

  let metMenu = {
    inicio: function () {
      propMenu.burgerMenu.addEventListener("click", metMenu.toggleMenu);

      propMenu.elemMenu.forEach((item) => {
        item.addEventListener("click", metMenu.hiddeMenu);
      });
    },

    toggleMenu: function () {
      if (propMenu.menuActive == false) {
        propMenu.iconMenu.classList = "fa-solid fa-xmark";
        propMenu.menuActive = true;
        propMenu.slideMenu.classList.add("active");
      } else {
        propMenu.menuActive = false;
        propMenu.slideMenu.classList.remove("active");
        propMenu.iconMenu.classList = "fa-solid fa-bars";
      }
    },
    hiddeMenu: function () {
      propMenu.menuActive = false;
      propMenu.slideMenu.classList.remove("active");
      propMenu.iconMenu.classList = "fa-solid fa-bars";
    },
  };
  return metMenu.inicio();
};
