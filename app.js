require("dotenv").config()
const express = require("express"); //Lo define como API / Servicios
const cors = require("cors"); //plaugin para definir conexiones
const app = express(); // definimos aplicacion
const dbConnectNoSql = require('./config/mongo');


app.use(cors()); // usamos cors
app.use(express.json()) // config para realizar post

app.listen(3002);

dbConnectNoSql()