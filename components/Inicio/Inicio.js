import "./Inicio.css"
import { marcasInicio } from "../Data/marcas"

const app = document.querySelector('#app')

export const Inicio = () => {
    const main = document.createElement('main')
    main.className ='mainInicio'
    for (const reloj of marcasInicio) {
        const div = document.createElement('div')
        div.className = 'contenedorImg'
        div.style.backgroundImage = `url(${reloj.img})`
        const title = document.createElement('h2');
        title.className = 'title'
        title.textContent = reloj.marca

        div.append(title)
    main.append(div)
    }


    
    app.append(main)
}