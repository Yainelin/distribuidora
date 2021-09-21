//Me traigo la libreria de mongodb para conectarme a la db
const mongoose = require('mongoose');

//Este codigo es para acceder a la db de la url y poner algunas cofiguraciones
mongoose.connect('mongodb+srv://admin:admin343@cluster0.m1fqd.mongodb.net/distribudora?retryWrites=true&w=majority' ,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(db => console.log('---> Base de datos conectada')).catch(error => console.log(error));