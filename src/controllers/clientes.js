const ctrl = {}
const Clientes = require('../models/Clientes');

ctrl.obtenerClientes= async (req, res) =>{  //Estamos creando una ruta que seria clientes//
    const clientes= await Clientes.find({});
    console.log(clientes);
    res.render('clientes', {clientes})  //es lo que imprime//  
}

ctrl.agregarClientes = async (req, res) =>{  //Estamos creando una ruta que es para agregar un cliente(llevara hacer un nuevo registro del cliente//
    res.render('agregar_cliente')  //es lo que imprime//  
}

ctrl.guardarClientes = async (req, res) =>{
    const guardar = new Clientes(req.body);
    await guardar.save();
    res.redirect('/clientes');
}  

ctrl.obtenercliente = async (req, res) => {
    const id = req.params.id;
    const cliente = await Clientes.findById(id);
    console.log(cliente);
    res.render('editarcliente', {cliente}) 
}

ctrl.actualizarcliente = async (req, res) => {
    const id = req.params.id;
    await Clientes.findByIdAndUpdate(id, req.body);
    res.redirect('/clientes');
}

ctrl.eliminarcliente = async (req, res) => {
    const id = req.params.id;
    await Clientes.findByIdAndDelete(id);
    res.redirect('/Clientes');
}

module.exports = ctrl