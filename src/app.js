const express = require('express'); //Es un servidor// 
const engine = require('ejs-mate');
const morgan = require('morgan');
const path = require('path');
const passport = require('passport'); 
const session = require('express-session');

//Inicializacion
const app = express(); //App es una variable, como la base del programa// 
require('./config/db');
require('./passport/local-autenticar');


//Configuraciones
app.set('puerto', 3000);
app.set('views', path.join(__dirname, 'view')); //View es lo que el usuario puede ver//
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.use(morgan('dev')); //morgan es la peticiones esta haciendo el usuario//
app.use(express.urlencoded({extended: false}));
app.use(session({
     secret:  'mysecretsession', 
     resave: false,
     saveUninitialized: false,
}))
app.use(Passport.initialize());
app.use(passport.session());

//Rutas
app.use(require('./routes/index.routes'));  //Rutas 
app.use(require('./routes/productos.routes')); 
app.use(require('./routes/clientes.routes')); 
//Archivos estaticos
app.use(express.static(path.join(__dirname, 'public'))); //aca utilizo la carpeta public

//Arrancando el servidor
app.listen(app.get('puerto'), () =>{
  console.log('servidor en el puerto ' + app.get('puerto'));
})
