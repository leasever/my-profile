import view from "./header.html?raw";
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

export const Header = () => {
  const header = $("#header");
  header.innerHTML = view;

  let propMenu = {
    burgerMenu: $("#burgerMenu"),
    slideMenu: $("#slideMenu"),
    menuActive: false,
    elemMenu: $$("#slideMenu .menu a"),
    iconMenu: $("#iconMenu"),
    iconClose: $("#iconClose"),
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
        propMenu.menuActive = true;
        propMenu.slideMenu.classList.add("active");
        propMenu.iconMenu.classList.add("hidden");
        propMenu.iconClose.classList.remove("hidden");
      } else {
        propMenu.menuActive = false;
        propMenu.slideMenu.classList.remove("active");
        propMenu.iconMenu.classList.remove("hidden");
        propMenu.iconClose.classList.add("hidden");
      }
    },
    hiddeMenu: function () {
      propMenu.menuActive = false;
      propMenu.slideMenu.classList.remove("active");
      propMenu.iconMenu.classList.remove("hidden");
      propMenu.iconClose.classList.add("hidden");
    },
  };
  return metMenu.inicio();
};
