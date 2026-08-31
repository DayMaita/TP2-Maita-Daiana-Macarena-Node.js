function crearInforme(juegos) {
  const registros = juegos.map((juego, indice) => {
    const estado = juego.disponible ? 'Disponible' : 'No disponible';

    return [
      `${indice + 1}. ${juego.titulo}`,
      `   Editorial y año: ${juego.editorial} - ${juego.anio}`,
      `   Participantes: ${juego.jugadoresMin} a ${juego.jugadoresMax}`,
      `   Categorías: ${juego.categorias.join(', ')}`,
      `   Estado: ${estado}`
    ].join('\n');
  });

  return [
    'CATÁLOGO DE JUEGOS DE MESA',
    '===========================',
    `Cantidad de juegos: ${juegos.length}`,
    '',
    registros.join('\n\n')
  ].join('\n');
}

module.exports = { crearInforme };
