const { model, Schema } = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const usuarioSchema = new Schema({
    nombre: { type: String, require: true, trim: true, maxlength: 150  },
    apellido: { type: String, require: true, trim: true, maxlength: 150  },
    telefono: { type: Number, require: true, trim: true, maxlength: 30  },
    email: {type: String, },
    password: {type: String, require: true, trim: true},
    timestamp: {type: Date, default: Date.now}
    
});

usuarioSchema.methods.encryptPassword = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

usuarioSchema.methods.comparePassword= function (password) {
  return bcrypt.compareSync(password, this.password);
};


module.exports = model('usuario', usuarioSchema);