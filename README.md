# El Impostor

Juego de deducción social en español para cuatro o más personas que comparten un teléfono. Una persona lee su tarjeta, la oculta y pasa el dispositivo. Los civiles comparten una palabra secreta y cada impostor recibe la misma pista indirecta.

[Jugar en GitHub Pages](https://arklord12.github.io/Juego_del_Impostor/)

## Jugar

1. Abre `index.html` en un navegador moderno. También puedes servir la carpeta con `python -m http.server 8000` y abrir `http://localhost:8000`.
2. Edita los nombres, añade o quita jugadores y elige una temática. **Aleatorio** sortea una de las cinco. Con cinco personas ya puedes seleccionar dos impostores. La partida siempre empieza con mayoría civil.
3. Pulsa **Iniciar partida**. Cada persona arrastra su tarjeta hacia arriba con el dedo o el ratón. Al soltarla, se oculta. Con teclado, enfoca la tarjeta y mantén pulsada la barra espaciadora. La flecha hacia abajo pasa al siguiente turno después de ver el rol.
4. Cuando todos conozcan su tarjeta, la pantalla anuncia quién empieza. Den pistas por turnos sin mencionar la palabra. Hay cinco minutos por debate. Pulsen **Votar** para terminarlo antes.
5. Cada persona en pie emite un voto. Al completar todos, pulsen **Mostrar resultados**. **Reiniciar votos** permite corregir el recuento. Si hay empate en el primer puesto, todos vuelven a votar entre quienes empataron.
6. Cierren la expulsión con la **X**. Si todavía hay mayoría civil y queda algún impostor, empieza otro debate de cinco minutos. Los civiles ganan cuando expulsan a todos los impostores. Los impostores ganan cuando igualan en número a los civiles.

**Volver a jugar** conserva la lista y los ajustes para una nueva partida. Recargar la página devuelve el juego a la configuración inicial. Las tarjetas, el temporizador y las votaciones se gestionan en el navegador.

## Publicar en GitHub Pages

En este repositorio, `main` contiene el código y `gh-pages` publica el juego. Para actualizar la versión en línea después de guardar tus cambios en `main`, ejecuta `git push origin main` y luego `git push origin main:gh-pages`.

Para activar Pages en una copia del repositorio y publicar directamente desde `main`:

1. Sube a la rama `main` los archivos `index.html`, `styles.css`, `app.js`, `data.js`, `.nojekyll` y la carpeta `assets/`. Conserva esta estructura, con `index.html` en la raíz.
2. En GitHub, abre el repositorio y entra en **Settings → Pages**.
3. En **Build and deployment → Source**, selecciona **Deploy from a branch**.
4. Selecciona la rama **main**, la carpeta **/(root)** y pulsa **Save**.
5. Espera a que termine **pages build and deployment** en la pestaña **Actions**. Regresa a **Settings → Pages** y abre **Visit site**. Los siguientes cambios en `main` actualizan el juego.

[Guía de GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## Editar el catálogo

El archivo `data.js` contiene `GAME_DATA`. Cada temática tiene una clave única, un nombre visible, el indicador `requiereImagen` y un arreglo `items`. El catálogo inicial contiene 30 entradas por temática, 150 en total.

### Añadir, editar o quitar una palabra

1. Busca la temática por su clave, por ejemplo `comidas`.
2. Para añadir una entrada, agrega un objeto dentro de `items`. Separa los objetos con comas.

   ```js
   { palabra: "Mandarina", pista: "Gajos" }
   ```

3. Para editarla, cambia `palabra` o `pista` entre comillas. Procura que la pista evoque una asociación que dé margen para disimular.
4. Para eliminarla, borra el objeto completo y ajusta las comas. Deja al menos una entrada en cada temática disponible.
5. Guarda y recarga el juego. Selecciona la temática editada al iniciar la siguiente partida.

### Añadir o cambiar una imagen

1. Guarda el retrato en `assets/personajes/` con un nombre sencillo. Usa WebP, PNG, JPEG o SVG.
2. Dentro de la entrada del personaje, establece `imagen` con la ruta relativa completa. Respeta las mayúsculas y la extensión del archivo.

   ```js
   { palabra: "Mario", pista: "Tubería", imagen: "./assets/personajes/mario.webp" }
   ```

3. Para sustituir un retrato, reemplaza el archivo o cambia la ruta. Si quitas un personaje, elimina su entrada y, cuando ninguna otra entrada lo use, su imagen. Mantén un retrato en cada entrada de Cultura Popular.

### Crear una temática

1. En `GAME_DATA`, agrega una propiedad junto a las demás temáticas. Pon una coma entre la propiedad anterior y la nueva.
2. Usa una clave única sin espacios. Define el nombre visible y al menos una pareja de palabra y pista. Por ejemplo:

   ```js
   instrumentos: {
     nombre: "Instrumentos",
     requiereImagen: false,
     items: [
       { palabra: "Violín", pista: "Barniz" },
       { palabra: "Piano", pista: "Ochenta y ocho" }
     ]
   }
   ```

3. Para una temática ilustrada, usa `requiereImagen: true` e incluye `imagen` en cada entrada.
4. Guarda `data.js` y recarga. La temática aparece en el selector y participa en **Aleatorio**. Se le asigna un icono genérico si su clave es nueva.

## Archivos

- `index.html` contiene la página y carga los recursos con rutas relativas.
- `styles.css` define la interfaz adaptable y las animaciones.
- `app.js` gestiona turnos, roles, debate, voto, desempate y victoria.
- `data.js` reúne las palabras, pistas y rutas de imágenes.
- `assets/` guarda las ilustraciones, el icono de la aplicación y las fuentes locales Bricolage Grotesque y DM Sans con sus licencias.
