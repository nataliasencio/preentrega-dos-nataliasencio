//traigo los elementos input y el boton por id y los guardo en variables:
let nombrePaleta = document.getElementById("nombre")
let saborPaleta = document.getElementById("sabor")
let precioPaleta = document.getElementById("precio")
let stockPaleta = document.getElementById("stock")
let botonAgregarPaleta = document.getElementById("agregar")
//para que al cargar la página imprima el contenido guardado en el localStorage en el DOM
window.onload = function(){
    let paletaGuardada = localStorage.getItem("PaletaAgregada")
    if(paletaGuardada){
        listaPaletas = JSON.parse(paletaGuardada)
        mostrarPaletas()
    }
}
//traigo el div por su id donde mostraré los valores de los input en la pagina DOM
let resultadoContenedor = document.getElementById("muestroPaletas")



//creo un array vacio para agregar los objetos que creo en el evento del boton agregar paleta
let listaPaletas = []

//le creo un evento al boton para agregar la paleta
botonAgregarPaleta.addEventListener("click", function(){
    //guardo los valores de los input en variables
    let valorInput1 = nombrePaleta.value
    let valorInput2 = saborPaleta.value
    let valorInput3 = precioPaleta.value
    let valorInput4 = stockPaleta.value
    //creo el objeto 
    const paletaAgregada = {
        nombrePaleta : valorInput1,
        saborPaleta : valorInput2,
        precioPaleta : valorInput3,
        stockPaleta : valorInput4
    }
    //vacio los input luego del click del boton
    nombrePaleta.value = ""
    saborPaleta.value = ""
    precioPaleta.value = ""
    stockPaleta.value = ""

    if(paletaAgregada.nombrePaleta===""||paletaAgregada.saborPaleta===""||paletaAgregada.precioPaleta==="" ||paletaAgregada.stockPaleta ==="" ){
        alert("Por favor ingresa un valor válido")
    }else{
    //agrego el objeto a mi array
    listaPaletas.push(paletaAgregada) 
    //guardo el array en el localStorage
    localStorage.setItem("PaletaAgregada", JSON.stringify(listaPaletas))
    //llamo a la fcion que recorre y muestra el array en el DOM
    mostrarPaletas()
     
    }
    
})

//creo una fcion que recorre el array y lo muestra en el DOM
let mostrarPaletas = () =>{
   
    //vacio los input
    resultadoContenedor.innerHTML = ""
    nombrePaleta.value = ""
    saborPaleta.value = ""
    precioPaleta.value = ""
    stockPaleta.value = ""
    
    //recorro el array y lo imprimo en el DOM
    listaPaletas.forEach(function(elemento){
      resultadoContenedor.innerHTML += `Nombre: ${elemento.nombrePaleta}, Sabor: ${elemento.saborPaleta}, Precio: ${elemento.precioPaleta}, Cantidad en stock: ${elemento.stockPaleta}<br/>`
    })

}