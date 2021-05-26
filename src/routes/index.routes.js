const {Router} = require('express'); //express trae una funsion llamada router// 
const router = Router();

router.get('/', (req, res) =>{  //Estamos creando una ruta que seria //
    res.render('index')  //es lo que imprime//  
});

router.get('/inicio', (req, res) =>{  //Estamos creando una ruta que seria inicio //
    res.render('inicio')  //es lo que imprime//  
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


module.exports = router; 