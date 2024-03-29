import { Contacto } from "../Contacto/Contacto";
import { relojes } from "../Data/relojes";
import { Inicio } from "../Inicio/Inicio";
import {printRelojes } from "../Relojes/RelojesComponent";
import "./Header.css"

export const printHeader = () => {
    const header = document.querySelector("#header")
    const nav = 
        `
        <img src="/icono.png" alt="logo de la página" class="logoHeader">
        <button class="buttonBurguer"><img src="/menu.png" class="burguer"/></button>
        <nav id="navegador">
        <a id="inicio">Inicio<div class="line"></div></a>
        <a id="relojes">Relojes<div class="line"></div></a>
        <a id="contacto">Contacto<div class="line"></div></a>
        </nav>
        `
header.innerHTML = nav
const app = document.querySelector("#app")
const inicio = document.querySelector('#inicio')
const contacto = document.querySelector("#contacto")
const seccionRelojes = document.querySelector("#relojes")

const printInicio = () => {
  app.innerHTML = ""
  Inicio()
  }

  inicio.addEventListener("click",() => {
    navElement.classList.remove("visible")
    printInicio()
  })

  const printContacto = () => {
    app.innerHTML = ""
    Contacto()
    }
  contacto.addEventListener("click",() => {
    navElement.classList.remove("visible")
    printContacto()
})

  const printPaginaRelojes = () => {
    app.innerHTML = ""
    printRelojes(relojes)
  }
  seccionRelojes.addEventListener("click",() => {
    navElement.classList.remove("visible")
    printPaginaRelojes()
  })

const buttonBurguer = document.querySelector(".buttonBurguer");
const navElement = document.querySelector("#navegador");
buttonBurguer.addEventListener("click",  () => {
    navElement.classList.toggle("visible");
});
};




