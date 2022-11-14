export const Header = () => {
  document.querySelector("#header").innerHTML = `
  <div class="container inner-header-pc">
     <a href="#/"><h1>ABRAHAM LEANDRO</h1></a>
     <nav class="menu">
       <a href="#/">Sobre mí</a>
       <a href="#/proyectos">Proyectos</a>
       <a href="#/cv">CV</a>
       <a href="#/contacto">Contacto</a>
     </nav>       
  </div>
  <div class="container inner-header-movil">    
     <a href="#/"><h1>ABRAHAM LEANDRO</h1></a> 
     <div class="burger-menu" id="burgerMenu">
      <i class="fa-sharp fa-solid fa-bars"></i>
     </div>
     <div class="slide-menu" id="slideMenu">
      <nav class="menu">
       <a href="#/">Sobre mí</a>
       <a href="#/proyectos">Proyectos</a>
       <a href="#/cv">CV</a>
       <a href="#/contacto">Contacto</a>
      </nav>
     </div>     
  </div>`;
  let propMenu = {
    burgerMenu: document.querySelector("#burgerMenu"),
    slideMenu: document.querySelector("#slideMenu"),
    menuActive: false,
    elemMenu: document.querySelectorAll("#slideMenu .menu a"),
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
        propMenu.slideMenu.className = propMenu.slideMenu.className + " active";
      } else {
        propMenu.menuActive = false;
        propMenu.slideMenu.className = propMenu.slideMenu.className.replace("active", "");
      }
    },
    hiddeMenu: function () {
      propMenu.menuActive = false;
      propMenu.slideMenu.className = propMenu.slideMenu.className.replace("active", "");
    },
  };
  return metMenu.inicio();
};
