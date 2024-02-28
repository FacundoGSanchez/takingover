const express = require("express");
const fs = require("fs");
const router = express.Router();

const PATH_ROUTES = __dirname;

//Toma el nombre del archivo y lo separa de la extension.
const removeExtension = (fileName) => {
    return fileName.split('.').shift()
}

// redirecciona la ruta segun el archivo en carpeta folder
fs.readdirSync(PATH_ROUTES).filter((file) => {
    const name = removeExtension(file)
    if(name !== 'index'){
       // console.log(file)
        router.use(`/${name}`,require(`./${file}`))
    }
})

module.exports = router