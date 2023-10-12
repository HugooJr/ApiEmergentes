const DatosUsuario = require('../entidades/datos');

// Función para agregar un nuevo dato de usuario en objectperson.js
async function agregarDatoUsuario(frase, reaccion, colorfondo, colorLetra, ip, cantidadClicks) {
    
  try {
    const nuevoDatoUsuario = new DatosUsuario({
      frase,
      reaccion,
      colorfondo,
      colorLetra,
      ip,
      //cantidadClicks,
    });

    const resultado = await nuevoDatoUsuario.save();
    if (resultado) {

      return '¡Registro guardado correctamente!';
    } else {

      return 'Ocurrió un error al guardar el registro.';
    }
  } catch (error) {
    throw error;
  }
}


module.exports = {
  agregarDatoUsuario,
  // Exporta otras funciones aquí si es necesario...
};
