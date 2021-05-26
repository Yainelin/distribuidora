const {Router} = require('express'); //express trae una funsion llamada router// 
const router = Router();
//Controladores
const ctrl = require('../controllers/clientes');

router.get('/clientes', ctrl.obtenerClientes);

router.get('/agregar_cliente', ctrl.agregarClientes);

router.post('/agregar_cliente', ctrl.guardarClientes);

router.get('/cliente/:id', ctrl.obtenerClientes); //Para traerme al cliente que se va actualizar datos o eliminar//

// router.post('/cliente/:id', ctrl.actualizarClientes); //Actualizar cliente//

// router.get('/producto/cliente/:id', ctrl.eliminarcliente); //Eliminar cliente//



module.exports = router; 