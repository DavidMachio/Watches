import "./style.css";
import { relojes } from "./components/Data/relojes";
import { printHeader } from "./components/Header/Header";
import { printFooter } from "./components/Footer/Footer";


const section = document.querySelector("#app");

const divBotones = document.querySelector("#botones");

let MARCA = "";
let PRECIO = "";


const printBotones = () => {
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
  const limpiar = document.createElement("button");

  option.textContent = "Marcas";
  inputPrecio.placeholder = "Precio Máximo";
  inputPrecio.type = "number";
  limpiar.textContent = "Limpiar";

  sectionBotones.classList = "sectionBotones";
  divButtons.classList = "containerButtons"
  divInputs.classList = "containerInputs"

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
  inputPrecio.addEventListener("input", (ev) => {
    PRECIO = ev.target.value;
    console.log(PRECIO);
    filtrarRelojes();
  });
  limpiar.addEventListener("click", () => {
    console.log("click");
    limpiarFiltros();
  });

  divInputs.append(selectMarca, inputPrecio);
  divButtons.append( limpiar);
  sectionBotones.append(divInputs, divButtons);

  divBotones.append(sectionBotones);
};

const printRelojes = (data) => {
  section.innerHTML = "";
  for (const reloj of data) {
    const article = document.createElement("article");
    const marca = document.createElement("h2");
    const foto = document.createElement("img");
    const modelo = document.createElement("h2");
    const material = document.createElement("h3");
    const precio = document.createElement("h4");
    const divColores = document.createElement("div");

    for (const color of reloj.colores) {
      const variedad = document.createElement("div");

      article.classList = "card"
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
    section.classList = "sectionRelojes";

    article.append(marca);
    article.append(foto);
    article.append(modelo);
    article.append(material);
    article.append(precio);
    article.append(divColores);

    section.append(article);
  }
};


const printMensaje = () => {
  section.innerHTML = "";
  const mensaje = document.createElement("h2");
  mensaje.textContent = "No hay relojes";
  section.append(mensaje);
};

const filtrarRelojes = () => {
  const filtrados = [];
  for (const reloj of relojes) {
    if (
      (MARCA === reloj.marca || MARCA === "Marcas") &&
      (PRECIO === "" || reloj.precio <= PRECIO)
    ) {
      filtrados.push(reloj);
      printRelojes(filtrados);
    }
  }
  if (filtrados.length > 0) {
    printRelojes(filtrados);
  } else {
    printMensaje();
  }
};

const limpiarFiltros = () => {
  MARCA = "Marcas";
  PRECIO = "";

  const selectMarca = document.querySelector(".selectMarca");
  const inputPrecio = document.querySelector(".inputPrecio");

  selectMarca.value = "Marcas";
  inputPrecio.value = "";

  filtrarRelojes();
};


printHeader();

printBotones();

printRelojes(relojes);

printFooter();
