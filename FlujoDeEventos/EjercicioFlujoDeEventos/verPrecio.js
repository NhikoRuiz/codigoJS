// Al hacer click en el producto, mostrar su nombre. El click debe ser en el contenedor
// Al hacer click en el boton, mostrar su precio. El click debe ser en el boton


const producto = document.querySelector('.contenedor-1');
const btnPrecio = document.getElementById('btn-ver-precio');



btnPrecio.addEventListener('click',(e)=>{
    alert("El precio es de $60.000")
    e.stopPropagation()
})


producto.addEventListener('click',(e)=>{
    alert("El nombre del producto es Nike Air Force")
})