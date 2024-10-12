function loadContent(file, selectedDiv) {
    // Oculta el contenido previo si existe
    document.getElementById('services-contents').innerHTML = '';

    // Usa fetch para cargar el archivo HTML seleccionado
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el contenido.');
            }
            return response.text();
        })
        .then(data => {
            // Inserta el contenido del archivo en el contenedor
            document.getElementById('services-contents').innerHTML = data;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('services-contents').innerHTML = '<p>Error al cargar el contenido.</p>';
        });

    // Elimina la clase de selecciÃ³n de todos los divs
    document.querySelectorAll('.content-services-four > div').forEach(div => {
        div.classList.remove('selected');
    });

    // AÃ±ade la clase de selecciÃ³n al div clicado
    selectedDiv.classList.add('selected');
}

// Carga el contenido inicial al cargar la pÃ¡gina
window.onload = () => {
    const initialDiv = document.querySelector('.content-services-four .fastest-div');
    loadContent('fastest-web-servers.html', initialDiv);
};