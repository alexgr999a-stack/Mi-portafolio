const express = require("express");

const router = express.Router();

const contacto = require("../controllers/contact.controller");

router.post("/contacto", contacto);

module.exports = router;