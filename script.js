function iniciarArcodeon() {
  const acorddion = document.querySelectorAll(".arcoddion dt");

  function activeAccordion() {
    this.classList.toggle("ativo");
    this.nextElementSibling.classList.toggle("ativo");
  }

  acorddion.forEach((item) => {
    item.addEventListener("click", activeAccordion);
  });
}

iniciarArcodeon()

function initMenu() {
  const menuJs = document.querySelector(".menu-js i");
  const nav = document.querySelector("nav");

  function abrirMenu() {
    nav.classList.toggle("ativo");
  }
  menuJs.addEventListener("click", abrirMenu);
}

initMenu()


function initMenuFechado(){
  const menuFechado = document.querySelectorAll(".menu-header a");
  const nav = document.querySelector("nav");
  
  menuFechado.forEach((item) => {
    item.addEventListener("click", () => {
      nav.classList.remove("ativo");
    });
  });
}

initMenuFechado()

