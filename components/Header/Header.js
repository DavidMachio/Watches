import "./Header.css"

export const printHeader = () => {
    const header = document.querySelector("#header")
    
  
    const nav = 
        `
        <h2>Watches</h2>
        <button class="buttonBurguer"><img src="/menu.png" class="burguer"/></button>
        <nav id="navegador">
        <a>Relojes<div class="line"></div></a>
        <a>About<div class="line"></div></a>
        <a>Contacto<div class="line"></div></a>
        </nav>
        `
    


header.innerHTML = nav

const buttonBurguer = document.querySelector(".buttonBurguer");
const navElement = document.querySelector("#navegador");
buttonBurguer.addEventListener("click", function () {
    // Alternar la clase en el nav
    navElement.classList.toggle("visible"); // Reemplaza "tuClase" con el nombre de la clase que deseas agregar/quitar
});
};




