const path = require('node:path');
const pc = require('picocolors');
const { leerJson, escribirTexto } = require('./archivos');
const { crearInforme } = require('./juegos');

async function main() {
  const rutaDatos = path.join(__dirname, '..', 'datos', 'juegos.json');
  const rutaSalida = path.join(__dirname, '..', 'salida', 'catalogo-juegos.txt');

  try {
    const juegos = await leerJson(rutaDatos);
    const catalogo = crearInforme(juegos);
    await escribirTexto(rutaSalida, catalogo);

    console.log(catalogo);
    console.log(pc.green('Catálogo generado correctamente.'));
  } catch (error) {
    console.error(pc.red(`Error: ${error.message}`));
    process.exitCode = 1;
  }
}

main();
