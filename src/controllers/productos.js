const ctrl = {}
const Productos = require('../models/Productos');

ctrl.obtenerProducto = async (req, res) =>{  //Estamos creando una ruta que seria productos//
    const productos = await Productos.find({});
    console.log(productos);
    res.render('productos', {productos})  //es lo que imprime//  
}

ctrl.agregarProductos = async (req, res) =>{  //Estamos creando una ruta que es para agregar un producto(llevara hacer un nuevo registro del producto//
    res.render('agregar_producto')  //es lo que imprime//  
}

ctrl.guardarProductos = async (req, res) =>{
    const guardar = new Productos(req.body);
    await guardar.save();
    res.redirect('/productos');
}  

module.exports = ctrl