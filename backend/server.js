const express = require("express");
const cors = require("cors");

const contactRoutes = require("./routes/contact.routes");

const app = express();

app.use(cors());

app.use(express.json());

app.use(contactRoutes);

const PORT = 3000;

app.listen(PORT, ()=>{

    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);

});