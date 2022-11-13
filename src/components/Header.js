export const Header = () => {
  document.querySelector("#header").innerHTML = `
  <div class="container inner-header">
     <a href="#/"><h1>MI PORTAFOLIO</h1></a>
     <nav class="menu">
       <a href="#/">Inicio</a>
       <a href="#/proyectos">Proyectos</a>
       <a href="#/cv">CV</a>
       <a href="#/contacto">Contacto</a>
     </nav>
  </div>`;
};
