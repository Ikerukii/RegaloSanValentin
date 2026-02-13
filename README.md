# ❤️ Nuestra Historia por el Mundo - Guía de Publicación

¡Hola! Aquí tienes los pasos para subir tu regalo a internet y que dure para siempre usando GitHub Pages.

## Paso 1: Crear una cuenta en GitHub (si no tienes)
1.  Ve a [github.com](https://github.com/) y regístrate. Es gratis.

## Paso 2: Crear un nuevo repositorio
1.  Una vez dentro, haz clic en el botón "+" arriba a la derecha y selecciona **"New repository"**.
2.  Ponle un nombre, por ejemplo: `nuestra-historia` o `regalo-mapa`.
3.  Déjalo en **Public** (necesario para la versión gratuita de Pages).
4.  **IMPORTANTE**: No marques ninguna casilla de "Initialize this repository with..." (ni README, ni .gitignore, ni license). Queremos un repositorio vacío.
5.  Haz clic en **"Create repository"**.

## Paso 3: Subir los archivos desde tu ordenador
Ahora verás una pantalla con instrucciones. Busca la sección que dice **"…or push an existing repository from the command line"**.
Copia las tres líneas que aparecen allí. Serán parecidas a esto (¡pero usa las tuyas!):
```bash
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
git branch -M main
git push -u origin main
```
Abre la terminal en la carpeta de tu proyecto (`/Users/iker/Desktop/regalo_mapa`) y pega esas líneas una a una. Te pedirá tu usuario y contraseña de GitHub (o un token personal si tienes la seguridad activada).

## Paso 4: Activar GitHub Pages
1.  En la página de tu repositorio en GitHub, ve a la pestaña **"Settings"**.
2.  En el menú de la izquierda, baja hasta la sección "Code and automation" y haz clic en **"Pages"**.
3.  En "Source", asegúrate de que esté seleccionado **"Deploy from a branch"**.
4.  En "Branch", selecciona **"main"** y luego la carpeta **"/ (root)"**.
5.  Haz clic en **"Save"**.

¡Listo! En unos minutos, verás un enlace en la parte superior de esa página (algo como `https://tu-usuario.github.io/nuestra-historia/`). ¡Ese es el enlace para tu pareja!

## Cómo añadir más fotos en el futuro
Si quieres añadir más recuerdos:
1.  Pon la foto nueva en la carpeta `fotos`.
2.  Abre el archivo `script.js`.
3.  Añade un nuevo bloque al final de la lista `recuerdos`, siguiendo el ejemplo:
    ```javascript
    {
        coords: [LATITUD, LONGITUD],
        foto: "fotos/NuevaFoto.jpeg",
        texto: "Nuevo Lugar ❤️",
        id: "nuevo-id"
    },
    ```
4.  Guarda los cambios.
5.  En la terminal, ejecuta:
    ```bash
    git add .
    git commit -m "Añadido nuevo recuerdo"
    git push
    ```
¡La web se actualizará sola en unos minutos!
