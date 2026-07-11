const express = require("express");

const router = express.Router();

router.post("/contacto", (req, res) => {

    console.log(req.body);

    res.json({
        mensaje: "Mensaje recibido correctamente 🚀"
    });

});

module.exports = router;