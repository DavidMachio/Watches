import "./Footer.css"

export const printFooter = () => {

    const footer = document.querySelector("#footer")


    const p = document.createElement("footer")

    p.textContent="By David Machio"


    footer.appendChild(p)
}