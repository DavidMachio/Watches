import './RelojesComponent.css'
import { relojes } from "../Data/relojes";

let MARCA = "Marcas";
let PRECIO = "";
const section = document.querySelector("#app");
const seccionRelojes = document.createElement("section");
seccionRelojes.className = 'seccionRelojes'

export const printBotones = () => {
  const marcas = [];

  for (const reloj of relojes) {
    if (!marcas.includes(reloj.marca)) {
      marcas.push(reloj.marca);
    }
  }

  const sectionBotones = document.createElement("section");
  const divInputs = document.createElement("div");
  const divButtons = document.createElement("div");
  const selectMarca = document.createElement("select");
  const inputPrecio = document.createElement("input");
  const option = document.createElement("option");
  const buscar = document.createElement("button");
  const limpiar = document.createElement("button");

  option.value = "Marcas";
  option.textContent = "Marcas";
  inputPrecio.placeholder = "Precio Máximo";
  inputPrecio.type = "number";
  buscar.textContent = "Buscar";
  limpiar.textContent = "Limpiar";

  sectionBotones.classList = "sectionBotones";
  divButtons.classList = "containerButtons";
  divInputs.classList = "containerInputs";

  buscar.classList = "buttons buscar";
  inputPrecio.classList = "buttons inputPrecio";
  selectMarca.classList = "buttons selectMarca";
  selectMarca.appendChild(option);
  limpiar.classList = "buttons limpiar";

  for (const marca of marcas) {
    const option = document.createElement("option");
    option.value = marca;
    option.textContent = marca;
    selectMarca.appendChild(option);
  }

  selectMarca.addEventListener("change", (ev) => {
    MARCA = ev.target.value;
    console.log(MARCA);
    filtrarRelojes();
  });

  buscar.addEventListener("click", () => {
    PRECIO = inputPrecio.value;
    if (PRECIO <= 0) {
      printMensaje("Introduce un precio válido");
    } else {
      filtrarRelojes();
    }
  });

  limpiar.addEventListener("click", () => {
    console.log("click");
    limpiarFiltros();
  });

  divInputs.append(selectMarca, inputPrecio);
  divButtons.append(buscar, limpiar);
  sectionBotones.append(divInputs, divButtons);

  
  section.append(sectionBotones)
};

export const printRelojes = (data) => {
  section.innerHTML = "";
  seccionRelojes.innerHTML = ""
  printBotones();

   const selectMarca = document.querySelector(".selectMarca");
  const inputPrecio = document.querySelector(".inputPrecio");
  selectMarca.value = MARCA;
  inputPrecio.value = PRECIO;

  for (const reloj of data) {
    const article = document.createElement("article");
    const marca = document.createElement("h2");
    const foto = document.createElement("img");
    const datos = document.createElement("div")
    const modelo = document.createElement("h2");
    const material = document.createElement("h3");
    const precio = document.createElement("h4");
    const divColores = document.createElement("div");

    for (const color of reloj.colores) {
      const variedad = document.createElement("div");

      article.classList = "card";
      variedad.classList = "color";
      divColores.classList = "colores";
      variedad.style.backgroundColor = color;
      divColores.appendChild(variedad);
    }

    marca.textContent = reloj.marca;
    foto.src = reloj.img;
    modelo.textContent = reloj.modelo;
    material.textContent = reloj.material;
    precio.textContent = `${reloj.precio} €`;

    marca.classList = "marca";
    foto.classList = "imgReloj";
    datos.classList = "datos";
    
    article.append(marca);
    article.append(foto);
    datos.append(modelo);
    datos.append(material);
    datos.append(precio);
    datos.append(divColores);
    article.append(datos)

    
    seccionRelojes.append(article);
    section.append(seccionRelojes);
  }
};

export const printMensaje = (textcontent) => {
  section.innerHTML = "";
  printBotones()
  const article = document.createElement("section")
  article.className= 'sectionMensaje'
  const mensaje = document.createElement("h2");
  mensaje.textContent = textcontent;
  article.append(mensaje);
  section.append(article);
};

export const filtrarRelojes = () => {
  const filtrados = [];
  for (const reloj of relojes) {
    if (
      (MARCA === reloj.marca || MARCA === "Marcas") &&
      (PRECIO === "" || reloj.precio <= PRECIO)
    ) {
      filtrados.push(reloj);
    }
  }
  if (filtrados.length > 0) {
    printRelojes(filtrados);
  } else {
    printMensaje("No hay relojes");
    const selectMarca = document.querySelector(".selectMarca");
  const inputPrecio = document.querySelector(".inputPrecio");
  selectMarca.value = MARCA;
  inputPrecio.value = PRECIO;
  }
};

export const limpiarFiltros = () => {
  MARCA = "Marcas";
  PRECIO = "";

  const selectMarca = document.querySelector(".selectMarca");
  const inputPrecio = document.querySelector(".inputPrecio");

  selectMarca.value = "Marcas";
  inputPrecio.value = "";

  filtrarRelojes();
};
