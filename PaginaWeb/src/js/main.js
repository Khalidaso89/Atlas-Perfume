
//ICONO BUSQUEDA
document.getElementById('icono-busqueda').onclick = function(i) {
    i.preventDefault();
    const buscador = document.getElementById('buscador');
    buscador.style.display = (buscador.style.display === 'block') ? 'none' : 'block';
};