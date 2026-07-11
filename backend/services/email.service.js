const transporter = require("../config/mail");

async function enviarCorreo(nombre, correo, mensaje) {

    await transporter.sendMail({

        from: process.env.EMAIL_USER,

        to: process.env.EMAIL_USER,

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