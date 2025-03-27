
//ICONO BUSQUEDA
document.getElementById('icono-busqueda').onclick = function (i) {
    i.preventDefault();
    const buscador = document.getElementById('buscador');
    buscador.style.display = (buscador.style.display === 'block') ? 'none' : 'block';
};


//Botones de paises: aparecer / desaparecer
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn-country');
    let activeSection = null; // Variable para rastrear la sección activa

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const country = button.dataset.country;
            const selectedSection = document.querySelector(`.country-section[data-country="${country}"]`);

            // Si la sección activa es la misma que la seleccionada, la ocultamos
            if (activeSection === selectedSection) {
                selectedSection.classList.remove('active');
                activeSection = null;
            } else {
                // Ocultar todas las secciones
                document.querySelectorAll('.country-section').forEach(section => {
                    section.classList.remove('active');
                });

                // Mostrar la nueva sección
                selectedSection.classList.add('active');
                activeSection = selectedSection;
            }
        });
    });
});




//Flechas carrusel

