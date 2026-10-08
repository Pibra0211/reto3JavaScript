const  nombre = document.getElementById("nombre");
const listaNombres = document.getElementById("listaNombres");
const boton = document.getElementById("btnAgregar");
const botonEliminar = document.getElementById("btnLimpiar")
const array = [];


boton.addEventListener("click", () =>{
    const textoNombre = nombre.value.trim();
    if(!textoNombre) return;
    array.push(textoNombre);
    array.sort()
    listaNombres.textContent = "";
    array.forEach(n => {
        const li = document.createElement("li");
        li.textContent = n;
        listaNombres.appendChild(li);
    });

});

botonEliminar.addEventListener("click", () =>{
    listaNombres.textContent = "";
    array.length = 0;
});
