const {Router} = require('express'); //express trae una funsion llamada router// 
const router = Router();
//Controladores
const ctrl = require('../controllers/clientes');

router.get('/clientes', ctrl.obtenercliente);

router.get('/agregar_cliente', ctrl.agregarcliente);

router.post('/agregar_cliente', ctrl.guardarcliente);

router.get('/cliente/:id', ctrl.obtenercliente); //Para traerme al cliente que se va actualizar datos o eliminar//

router.post('/cliente/:id', ctrl.actualizarcliente); //Actualizar cliente//

router.get('/producto/cliente/:id', ctrl.eliminarcliente); //Eliminar cliente//



module.exports = router; 