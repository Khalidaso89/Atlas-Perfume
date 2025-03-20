
//ICONO BUSQUEDA
document.getElementById('icono-busqueda').onclick = function(i) {
    i.preventDefault();
    const buscador = document.getElementById('buscador');
    buscador.style.display = (buscador.style.display === 'block') ? 'none' : 'block';
};

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn-country');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const country = button.dataset.country;

            // Ocultar todas las secciones
            document.querySelectorAll('.country-section').forEach(section => {
                section.classList.remove('active');
                section.classList.add('d-none');
            });

            // Mostrar la sección seleccionada
            const selectedSection = document.getElementById(country);
            selectedSection.classList.remove('d-none');
            selectedSection.classList.add('active');
        });
    });
});
