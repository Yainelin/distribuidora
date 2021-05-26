const {Router} = require('express'); //express trae una funsion llamada router// 
const router = Router();
//Controladores
const ctrl = require('../controllers/productos');

router.get('/productos', ctrl.obtenerProductos);

router.get('/agregar_producto', ctrl.agregarProductos);

router.post('/agregar_producto', ctrl.guardarProductos);

router.get('/producto/:id', ctrl.obtenerProducto); //Para traerme un producto el que se va actualizar o eliminar//

router.post('/producto/:id', ctrl.actualizarProducto); //Actualizar producto//

router.get('/producto/eliminar/:id', ctrl.eliminarProducto); //Eliminar producto//



module.exports = router; 