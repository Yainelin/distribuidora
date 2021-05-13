const express = require('express'); //Es un servidor// 
const engine = require('ejs-mate');
const morgan = require('morgan');
const path = require('path');

//Init
const app = express(); //App es una variable, como la base del programa// 
require('./config/db');


//Configuraciones
app.set('puerto', 3000);
app.set('views', path.join(__dirname, 'view')); //View es lo que el usuario puede ver//
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.use(morgan('dev')); //morgan es la peticiones esta haciendo el usuario//

//Rutas
app.use(require('./routes/index.routes'));  //Rutas 

//Archivos estaticos
app.use(express.static(path.join(__dirname, 'public'))); //aca utilizo la carpeta public

//Arrancando el servidor
app.listen(app.get('puerto'), () =>{
  console.log('servidor en el puerto ' + app.get('puerto'));
})