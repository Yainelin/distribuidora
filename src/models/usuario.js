const { model, Schema } = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const usuarioSchema = new Schema({
    nombre: { type: String, require: true, trim: true, maxlength: 150  },
    apellido: { type: String, require: true, trim: true, maxlength: 150  },
    telefono: { type: Number, require: true, trim: true, maxlength: 30  },
    correo: {type: String, requere: true, trim: true, maxlength: 60, unique: true },
    password: {type: String, requir: true, trim: true,  maxlength: 30,},
    timestamp: {type: Date, default: Date.now}
    
});

//Este metodo cifra la contraseña//
usuarioSchema.methods.encryptPassword = (password) => {
   return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

//este metodo se encarga de recibir la contraseña lo compara con lo que tengo almacenado en la base de datos//
usuarioSchema.method.compararpassword = function (password) {
  return bcrypt.compararSync(password, this.password);
};

module.exports = model('usuario', usuarioSchema);