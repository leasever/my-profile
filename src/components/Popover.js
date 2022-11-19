export const Popover = (props) => {
  return props
    .map((item) => {
      return `
  <div class="card-technologies">
    <img decoding="async" loading="lazy" src="/img/${item.img}" alt="Logo de ${item.title}" />      
    <div class="popover-content">
      <h4 class="popover-message">${item.title}</h4>
    </div>       
  </div>  
  `;
    })
    .join("");
};
