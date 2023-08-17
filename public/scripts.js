function mostrarContenido(nivel) {
    // Oculta todos los contenidos
    document.querySelectorAll('section[id$="-contenido"]').forEach(function (element) {
        element.style.display = 'none';
    });

    // Muestra el contenido del nivel seleccionado
    var contenido = document.getElementById(nivel + '-contenido');
    if (contenido) {
        contenido.style.display = 'block';
    }
}
