const { model, Schema } = require('mongoose');

const productosSchema = new Schema({
    nombre: { type: String, require: true, trim: true, maxlength: 40 }, //trim elimna los espacios que hace el usuario//
    codigo: { type: String, require: true, trim: true, maxlength: 60 },
    cantidad: {type: Number, require: true, trim: true },
    precio: { type: Number, require: true, trim: true  },
    descripcion: {type: String, require: true, trim: true, maxlength: 200 },
    timestamp: {type: Date, default: Date.now}
});

module.exports = model('productos', productosSchema);