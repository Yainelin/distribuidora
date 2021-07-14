const {Router} = require('express'); //express trae una funsion llamada router// 
const passport = require('passport');
const router = Router();

router.get('/', (req, res) =>{  //Estamos creando una ruta que seria //
    res.render('index')  //es lo que imprime//  
});

router.post('/login', passport.authenticate('localautenticar',{ 
    successRedirect: '/ventas',
    failureRedirect: '/',
    passReqToCallback: true
}));


router.get('/registro', (req, res) =>{ 
    res.render('registro')   
});

router.post('/registro', (req, res) =>{ 
    console.log(req.body);  
    res.send('recibido'); 
});


router.get('/ventas', (req, res) =>{  //Estamos creando una ruta que seria ventas//
    res.render('ventas')  //es lo que imprime//  
});

router.get('/factura', (req, res) =>{  //Estamos creando una ruta que seria factura//
    res.render('factura')  //es lo que imprime//  
});



module.exports = router; 