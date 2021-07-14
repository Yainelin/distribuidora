const passport = require ('passport');
const localStrategy =  require('passport-local').Strategy; 

const Usuario = require ('../models/usuario');

passport.serializeUser((usuario, done) => {
     done(null, usuario.id);
});

passport.deserializeUser(async (id, done) => {
     const usuario = await Usuario.findById(id);
     done(null, usuario);
});


passport.use('local-registro', new localStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done) => {
     
          const usuario = Usuario.findOne({email: email});
          if (usuario) {
               return done(null, false, req.flash('iniciar', 'El email ya existe'));
          } else{
              
               const usuario =  new Usuario();
               usuario.email = email;
               usuario.password = password.encryptPassword(password); 
               await Usuario.save();
               done(null, usuario);
          }
}));