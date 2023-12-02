# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


**Accesibilidad.jsx**

El componente `Accesibilidad.jsx` permite a los usuarios ajustar la accesibilidad visual de la aplicación. Proporciona controles para aumentar y disminuir el tamaño de la fuente, activar la escala de grises y cambiar al modo de alto contraste. Estos ajustes se aplican en tiempo real a la página mediante el uso de efectos `useEffect` en React.

Características:
- Aumentar y disminuir el tamaño de la fuente para una mejor legibilidad.
- Activar la escala de grises para una experiencia visual simplificada.
- Cambiar al modo de alto contraste para mejorar la visibilidad.

Uso:
1. Haga clic en "Aumentar Texto" para incrementar el tamaño de la fuente.
2. Haga clic en "Disminuir Texto" para reducir el tamaño de la fuente.
3. Haga clic en "Escala de Grises" para cambiar la página a una versión en escala de grises.
4. Haga clic en "Alto Contraste" para cambiar la página a un modo de alto contraste.

Este componente mejora la accesibilidad y permite a los usuarios personalizar la experiencia visual de la aplicación de acuerdo a sus preferencias.

**CardsAcademy.jsx**

El componente `CardsAcademy.jsx` muestra una serie de tarjetas de cursos académicos. Cada tarjeta incluye un icono, un título y un botón para acceder al curso correspondiente. El componente se puede personalizar con datos de cursos proporcionados como propiedades y permite a los usuarios hacer clic en las tarjetas para obtener más información.

Características:
- Muestra una colección de tarjetas de cursos académicos con iconos, títulos y botones.
- Permite personalizar el contenido de las tarjetas mediante datos de cursos pasados como propiedades.
- Posibilita la interacción del usuario al hacer clic en una tarjeta, proporcionando información adicional.

Uso:
1. Importa y utilice el componente `CardsAcademy.jsx` en tu aplicación React.
2. Pasa un array de datos de cursos a través de la propiedad `data`.
3. Define una función de controlador para manejar el evento de clic en una tarjeta y pasalo como `onCardClick`.

Este componente facilita la visualización y la interacción con los cursos académicos en una interfaz de usuario atractiva y organizada.

**CardsSchool.jsx**

El componente `CardsSchool.jsx` muestra una serie de tarjetas de cursos escolares. Cada tarjeta contiene un icono, un título y un botón para acceder al curso correspondiente. El componente se personaliza utilizando datos de cursos pasados como propiedades y presenta las tarjetas de manera organizada.

Características:
- Muestra una colección de tarjetas de cursos escolares con iconos, títulos y botones.
- Permite personalizar el contenido de las tarjetas mediante datos de cursos pasados como propiedades.
- Proporciona una visualización ordenada y atractiva de los cursos escolares disponibles.

Uso:
1. Importa y utiliza el componente `CardsSchool.jsx` en tu aplicación React.
2. Pasa un array de datos de cursos a través de la propiedad `data`.

Este componente ofrece una forma sencilla de mostrar los cursos escolares disponibles en una interfaz atractiva y fácil de navegar.

**Footer.jsx**

El componente `Footer.jsx` representa el pie de página de la aplicación. Incluye el logotipo de "Programate" y enlaces a las redes sociales en íconos. El componente está diseñado para mejorar la navegación y la interacción del usuario al proporcionar acceso rápido a las redes sociales de la plataforma.

Características:
- Muestra el logotipo de "Programate" en la parte superior del pie de página.
- Muestra íconos de redes sociales (Instagram, Facebook, LinkedIn y Spotify) en una disposición horizontal.
- Proporciona enlaces a las redes sociales para una navegación conveniente.

Uso:
1. Importa y utiliza el componente `Footer.jsx` en tu aplicación React.

Este componente agrega un pie de página profesional y funcional a tu aplicación, lo que brinda a los usuarios una forma rápida de acceder a las redes sociales de "Programate".

**Formulario.jsx**

El componente `Formulario.jsx` representa un formulario interactivo donde los usuarios pueden enviar comentarios a "Programate". El formulario solicita el nombre, correo electrónico y un comentario del usuario. Una vez completado, los datos se pueden enviar y se verifica si todos los campos están llenos antes de hacerlo.

Características:
- Formulario interactivo que permite a los usuarios enviar comentarios.
- Campos para ingresar el nombre, el correo electrónico y el comentario.
- Verificación de campos obligatorios antes de enviar el formulario.

Uso:
1. Importa y utiliza el componente `Formulario.jsx` en tu aplicación React.

Este componente brinda a los usuarios una manera conveniente de compartir sus opiniones y comentarios con "Programate" de manera efectiva y sencilla.

**Header.jsx**

El componente `Header` crea una barra de navegación para tu sitio web. Incluye un logotipo y enlaces de navegación que se pueden desplegar y ocultar con un botón de menú. Los enlaces llevan a diferentes secciones del sitio web.

Características:
- Barra de navegación con logotipo y enlaces de navegación.
- Botón de menú para desplegar y ocultar los enlaces en versiones móviles.
- Los enlaces llevan a las secciones "Inicio", "Quienes Somos", "Recursos" y "Cuentanos".

Uso:
1. Importa y utiliza el componente `Header.jsx` en tu aplicación React.

Este componente proporciona una navegación sencilla y organizada para los usuarios de tu sitio web, permitiéndoles acceder rápidamente a diferentes secciones.

**Niveles.jsx**

El componente `Niveles.jsx` muestra una lista de niveles y sus recursos asociados en una interfaz interactiva. Los usuarios pueden hacer clic en un nivel para ver los recursos disponibles para ese nivel. Los recursos se organizan por tipo y se muestran en forma de lista con enlaces.

Características:
- Interfaz que muestra los niveles disponibles y sus recursos.
- Selección de nivel y visualización de los recursos asociados al nivel seleccionado.
- Recursos organizados por tipo y presentados en una lista con enlaces.

Uso:
1. Importa y utiliza el componente `Niveles.jsx` en tu aplicación React.

Este componente proporciona una forma organizada y fácil de explorar los recursos disponibles en diferentes niveles, permitiendo a los usuarios acceder a los enlaces pertinentes según sus necesidades.

**Programs.jsx**

El componente `Programs.jsx` presenta una vista deslizable de programas disponibles usando la librería Swiper. Muestra una serie de imágenes representativas de los programas y permite al usuario seleccionar un programa específico mediante un botón "Ingresar".

Características:
- Utiliza la librería Swiper para mostrar programas deslizables.
- Cada diapositiva contiene una imagen y un botón "Ingresar".
- Al hacer clic en el botón, se llama a la función `onSelectProgram` con el nombre del programa como argumento.

Uso:
1. Importa y utiliza el componente `Programs.jsx` en tu aplicación React.

Este componente proporciona una forma atractiva y fácil de presentar opciones de programas a los usuarios y permite que seleccionen un programa específico para obtener más detalles o acceder a él.


**Slider.jsx**

El componente `Slider.jsx` utiliza la librería Swiper para crear un carrusel de imágenes en una vista de estilo cubierta. Las imágenes se presentan en una forma atractiva y dinámica, con una animación de efecto de cubierta y opciones de paginación.

Características:
- Utiliza la librería Swiper para implementar el carrusel de imágenes.
- Utiliza el efecto "coverflow" para dar una apariencia tridimensional y elegante a las imágenes.
- Las imágenes son presentadas en un diseño centrado y se adaptan automáticamente al tamaño del contenedor.
- Se proporciona una opción de paginación para navegar por las imágenes.

Uso:
1. Importa y utiliza el componente `Slider.jsx` en tu aplicación React.

El componente `Slider.jsx` es una forma atractiva de presentar múltiples imágenes en una vista de carrusel que captura la atención del usuario y mejora la experiencia visual de tu aplicación.


**VideoReproductor.jsx**

El componente `VideoReproductor.jsx` se encarga de mostrar una lista de reproducción de videos de YouTube y permitir la reproducción de los mismos en un reproductor de video incrustado. La lista de reproducción se obtiene de una base de datos de enlaces y se filtra según el idioma proporcionado.

Características:
- Utiliza la librería `axios` para hacer solicitudes a la API de YouTube y obtener los detalles de la lista de reproducción.
- Utiliza `ReactPlayer` para renderizar el reproductor de video de YouTube dentro del componente.
- Muestra una lista de videos disponibles en la lista de reproducción, permitiendo al usuario seleccionar un video para reproducir.
- El video seleccionado se muestra en un reproductor de video incrustado con controles de reproducción.

Uso:
1. Importa y utiliza el componente `VideoReproductor.jsx` en tu aplicación React.

El componente `VideoReproductor.jsx` es una forma efectiva de mostrar y reproducir una lista de reproducción de videos de YouTube en tu aplicación, brindando a los usuarios una experiencia de aprendizaje visual e interactiva.


**VideoSection.jsx**

El componente `VideoSection.jsx` está diseñado para incorporar el componente `VideoReproductor` y mostrar una sección de tu aplicación donde los usuarios pueden acceder a una lista de reproducción de videos relacionados con un lenguaje de programación específico.

Características:
- Utiliza el componente `VideoReproductor` para renderizar una sección que muestra una lista de reproducción de videos de YouTube.
- Permite a los usuarios reproducir videos en el reproductor incrustado dentro de la sección.
- Puede personalizarse proporcionando un lenguaje de programación específico al componente `VideoReproductor`.

Uso:
1. Importa y utiliza el componente `VideoSection.jsx` en tu aplicación React.

El componente `VideoSection.jsx` es una forma práctica de integrar y mostrar contenido de video relacionado con lenguajes de programación en tu aplicación, brindando a los usuarios una experiencia educativa y atractiva.