const {Router} = require('express'); //express trae una funsion llamada router// 
const router = Router();
//Controladores
const ctrl = require('../controllers/productos');

router.get('/productos', ctrl.obtenerProducto);

router.get('/agregar_producto', ctrl.agregarProductos);

router.post('/agregar_producto', ctrl.guardarProductos);


module.exports = router; 