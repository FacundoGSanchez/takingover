require("dotenv").config()
const dbConnectNoSql = require('./config/mongo');

const express = require("express"); //Lo define como API / Servicios
const cors = require("cors"); //plaugin para definir conexiones
const app = express(); // definimos aplicacion

app.use(cors()); // usamos cors
app.use(express.json()) // config para realizar post

const port = process.env.PORT || 3000

/** 
*Aqui invocamos las rutas
*/
app.use("/api", require("./routes"))

/**
 * Aqui activamos server 
 */
app.listen(port);


/**
 * se llama a la intacia de Base de datos NoSql
 */
dbConnectNoSql();