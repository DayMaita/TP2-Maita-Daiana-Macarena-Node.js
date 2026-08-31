# Trabajo práctico 02

## Descripción
Aplicación de consola que lee un catálogo de juegos de mesa desde un archivo JSON, transforma sus registros y genera un informe de texto.

## Instalación
```bash
npm install
```

## Ejecución
```bash
npm start
```

Para comprobar la sintaxis:
```bash
npm run check
```

## Estructura del proyecto
- `datos/juegos.json`: contiene los datos de los juegos.
- `src/archivos.js`: se encarga de leer y escribir archivos.
- `src/juegos.js`: transforma los datos y crea el informe.
- `src/index.js`: coordina la aplicación.
- `salida/catalogo-juegos.txt`: informe generado por el programa.
- `package.json`: configuración y scripts del proyecto.
- `package-lock.json`: registra las versiones de las dependencias.
- `.gitignore`: evita subir `node_modules` y `.env`.

## Flujo asíncrono
`main` es una función `async` que espera la lectura del JSON, genera el catálogo y espera la escritura del informe usando `await`. Las operaciones de archivos se realizan con `node:fs/promises`.

## Dependencias
Se utiliza `picocolors` para mostrar mensajes de éxito y error con colores en la terminal.

1. ¿Qué responsabilidad tiene cada módulo?
`archivos.js` maneja el acceso a los archivos. `juegos.js` transforma los datos y crea el informe. `index.js` coordina todo el proceso.

2. ¿Qué diferencia existe entre exportar una función y ejecutarla?
Exportar una función permite que otro archivo pueda utilizarla. Ejecutarla significa llamar a esa función para que realice su tarea.

3. ¿Qué representa la promesa devuelta por fs.readFile?
Representa una operación que terminará cuando se haya leído el archivo y devolverá su contenido, o producirá un error si no se puede leer.

4. ¿Por qué await se utiliza dentro de una función async?
Porque `await` permite esperar el resultado de una promesa y solo puede utilizarse dentro de una función `async`.

5. ¿Qué errores pueden llegar al catch de main?
Pueden llegar errores de lectura del archivo, JSON inválido, creación de carpetas, escritura del informe u otras operaciones que fallen dentro de `try`.

6. ¿Por qué se publican package.json y package-lock.json, pero no node_modules?
Porque esos archivos permiten instalar las dependencias necesarias y mantener sus versiones. `node_modules` contiene las dependencias instaladas y puede reconstruirse con `npm install`.

7. ¿Para qué se utiliza picocolors y por qué figura en dependencies?
Se utiliza para mostrar mensajes coloreados en la terminal y figura en `dependencies` porque el programa lo necesita para ejecutarse.
