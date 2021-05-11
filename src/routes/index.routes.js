const {Router} = require('express'); //express trae una funsion llamada router// 
const router = Router();

router.get('/', (req, res) =>{  //Estamos creando una ruta que seria //
    res.render('index')  //es lo que imprime//  
});

router.get('/inicio', (req, res) =>{  //Estamos creando una ruta que seria inicio //
    res.render('inicio')  //es lo que imprime//  
});

router.get('/productos', (req, res) =>{  //Estamos creando una ruta que seria productos//
    res.render('productos')  //es lo que imprime//  
});

router.get('/clientes', (req, res) =>{  //Estamos creando una ruta que seria clientes//
    res.render('clientes')  //es lo que imprime//  
});

router.get('/ventas', (req, res) =>{  //Estamos creando una ruta que seria ventas//
    res.render('ventas')  //es lo que imprime//  
});

router.get('/factura', (req, res) =>{  //Estamos creando una ruta que seria factura//
    res.render('factura')  //es lo que imprime//  
});

router.get('/cobranzas', (req, res) =>{  //Estamos creando una ruta que seria factura//
    res.render('cobranzas')  //es lo que imprime//  
}); 
router.get('/agregar_cliente', (req, res) =>{  //Estamos creando una ruta que agregar cliente(llevara para hacer el registro del cliente nuevo//
    res.render('agregar_cliente')  //es lo que imprime//  
});

router.get('/agregar_producto', (req, res) =>{  //Estamos creando una ruta que es para agregar un producto(llevara hacer un nuevo registro del producto//
    res.render('agregar_producto')  //es lo que imprime//  
});

module.exports = router; 