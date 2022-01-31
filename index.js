// ./index.js

/**
 * PATRONES DE DISEÑO
 * SON PROPUESTAS Y CASOS DE USO QUE PERMITEN RESOLVER PROBLEMAS COTIDIANOS
 * 
 * 1. MODULE PATTERN - PATRÓN MODULAR
 * 
 * APLICA VALIDEZ DE IMPORTACIONES Y EXPORTACIONES EN UN PROYECTO
 * 
 */


// 1. IMPORTACIONES
// PROCESO DE TRAERNOS FUNCIONES O VARIABLES DE OTROS ARCHIVOS JS A ESTE

//A. ARCHIVOS EXTERNOS PROPIOS
// const suma = require("./suma")
// console.log(suma(2,4))

// const resta = require("./resta")
// console.log(resta(6,2))

///B. ARCHIVOS DE NODE-MODULES
const express   = require("express")
const app       = express()




// 2. MIDDLEWARES
//VARIABLES DE ENTORNO
//SI ESTAS EN LOCAL VALE UNA COSA Y EN REMOTO OTRA
require("dotenv").config()


// 3. RUTAS
app.use("/", require("./routes/index"))


// 4. SERVIDOR

app.listen(process.env.PORT, () => {
	console.log("Servidor activo")
})
