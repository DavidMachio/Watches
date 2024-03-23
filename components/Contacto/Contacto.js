import './Contacto.css'

const app = document.querySelector('#app')

export const Contacto = () => {

    app.innerHTML = `
    <section class="sectionForm">
    <form action="https://formsubmit.co/d_machio@hotmail.com" method="POST">

    <input type="text" name="name" placeholder="Name" required>
    <input type="email" name="email" placeholder="Email">
    <input type="text" name="Asunto" placeholder="Asunto" />
    <textarea name="Comentario" placeholder="What about"></textarea>
    <button class="enviar" type="submit" value="Enviar">Enviar</button>
    <input type="hidden" name="_next" value="https://watchesearch.netlify.app" />
    <input type="hidden" name="_captcha" value="true" />
          <input type="hidden" name="_autoresponse" value="Tu mensaje ha sido recibido correctamente, muchas gracias por contactar. Tu opinión es muy importante para mi"></input>
    
    </form>
    </section>
    `
}