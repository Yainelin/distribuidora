const { model, Schema } = require('mongoose');

const clientesSchema = new Schema({
    nombreyapellido: { type: String, require: true, trim: true, maxlength: 150  },
    cedula: {type: Number, require: true,  trim: true, maxlength: 30, unique: true},
    telefono: { type: Number, require: true, trim: true, maxlength: 30  },
    email: {type: String, require: true, trim: true, maxlength: 60, unique: true },
    direccion: { type: String, require: true, trim: true, maxlength: 150 },
    timestamp: {type: Date, default: Date.now}
});

module.exports = model('clientes', clientesSchema);