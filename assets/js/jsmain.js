let cantidad = document.querySelector('#cantidad')
let color = document.querySelector('#color')
let totalPrecio = document.querySelector('#preciot span');
let quantityTotal = document.querySelector('#cantidadt span');
let colorTotal = document.querySelector('#colortot');

const PRECIO = 400000;

presion.addEventListener('click', () => {
    let total = Number(cantidad.value) * PRECIO;
    totalPrecio.innerHTML = new Intl.NumberFormat("de-DE").format(total);
    totalPrecio.style.color = color.value;
    quantityTotal.innerHTML = cantidad.value;
    quantityTotal.style.color = color.value;
    colorTotal.style.backgroundColor = color.value;
})