const resend = require("../config/resend");

async function enviarCorreo(nombre, correo, mensaje) {

    await resend.emails.send({

        from: "onboarding@resend.dev",

        to: "alexgr999a@gmail.com",

        subject: "Nuevo mensaje desde el portafolio",

        html: `
            <h2>Nuevo mensaje recibido</h2>

            <p><strong>Nombre:</strong> ${nombre}</p>

            <p><strong>Correo:</strong> ${correo}</p>

            <p><strong>Mensaje:</strong></p>

            <p>${mensaje}</p>
        `
    });

}

module.exports = enviarCorreo;