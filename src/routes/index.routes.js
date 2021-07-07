const {Router} = require('express'); //express trae una funsion llamada router// 
const router = Router();

router.get('/', (req, res) =>{  //Estamos creando una ruta que seria //
    res.render('index')  //es lo que imprime//  
});


router.get('/registro', (req, res) =>{ 
    res.render('registro')   
});

router.post('/registro', (req, res) =>{ 
    res.render('registro')   
});

router.get('/login', (req, res) =>{ 
    res.render('login')   
});

router.post('/login', (req, res) =>{ 
    res.render('login')   
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



module.exports = router; 