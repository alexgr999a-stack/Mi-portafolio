const enviarCorreo = require("../services/email.service");

async function contacto(req, res) {
    const { nombre, correo, mensaje } = req.body;

    try {
        await enviarCorreo(nombre, correo, mensaje);

        res.json({
            mensaje: "Correo enviado correctamente 🚀"
        });

    } catch (error) {

        console.error("ERROR COMPLETO:", error);

        res.status(500).json({
            mensaje: error.message,
            stack: error.stack
        });
    }
}

module.exports = contacto;