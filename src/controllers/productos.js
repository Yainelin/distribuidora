const ctrl = {}
const Productos = require('../models/Productos');

ctrl.obtenerProductos = async (req, res) =>{  //Estamos creando una ruta que seria productos//
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

ctrl.obtenerProducto = async (req, res) => {
    const id = req.params.id;
    const producto = await Productos.findById(id);
    console.log(producto);
    res.render('editarProducto', {producto}) 
}

ctrl.actualizarProducto = async (req, res) => {
    const id = req.params.id;
    await Productos.findByIdAndUpdate(id, req.body);
    res.redirect('/productos');
}

ctrl.eliminarProducto = async (req, res) => {
    const id = req.params.id;
    await Productos.findByIdAndDelete(id);
    res.redirect('/productos');
}

module.exports = ctrl