//traigo los elementos input y el boton por id y los guardo en variables:
let nombrePaleta = document.getElementById("nombre")
let saborPaleta = document.getElementById("sabor")
let precioPaleta = document.getElementById("precio")
let stockPaleta = document.getElementById("stock")
let botonAgregarPaleta = document.getElementById("agregar")

//boton para traer las paletas agregadas recientemente en el localStorage
let botonTraer = document.getElementById("traer guardadas")
//evento del boton que trae las paletas guardadas en el localStorage
botonTraer.addEventListener("click", function(){
let paletaGuardada = localStorage.getItem("PaletaAgregada")
    if(paletaGuardada){
        listaPaletas = JSON.parse(paletaGuardada)
        mostrarPaletas()}
    })
//para que al cargar la pagina traiga el catalogo del localStorage y lo imprima en el DOM
 window.onload = function(){
    let catalogoGuardado = localStorage.getItem("catalogo")
    paletaGuardada = localStorage.getItem("PaletaAgregada")
    if(catalogoGuardado){
        listaPaletasCatalogo = JSON.parse(catalogoGuardado)
        listaPaletas = JSON.parse(paletaGuardada)
        mostrarPaletasCatalogo()
        mostrarPaletas()
    }
} 


//traigo el div por su id donde mostraré los valores de los input en la pagina DOM
let resultadoContenedor = document.getElementById("muestroPaletas")
//traigo boton y div para el catálogo
let botonCatalogo = document.getElementById("consultarCatalogo")
let resultadoContenedor2 = document.getElementById("resultado3")


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
   
    //vacio el div para no repetir contenido.
    resultadoContenedor.innerHTML = ""
    
    //recorro el array y lo imprimo en el DOM
    listaPaletas.forEach(function(elemento){
      resultadoContenedor.innerHTML += `Nombre: ${elemento.nombrePaleta}, Sabor: ${elemento.saborPaleta}, Precio: ${elemento.precioPaleta}, Cantidad en stock: ${elemento.stockPaleta}<br/>`
    })

}





//intentaré hacer un catálogo y filtrar las paletas por precios
//necesito:
/* 
para catalogo
-productos en una lista: objetos con la class constructora,los instancio y los pusheo a un array
 -un boton y un div para mostrar el resultado
 -creo un evento al boton
 -como mostrar el resultado tanto de las paletas agregadas como las que voy agregando
 para filtrar*/
 //fción constructora con un método para crear nuevas paletas
 class Paletas {
    constructor (nombre, sabor, precio,stock){
        this.nombre = nombre,
        this.sabor = sabor,
        this.precio = precio,
        this.stock = stock
    }
}
//instancio los objetos
const paleta1 = new Paletas ("oreo", "galletitas", 450,6)
const paleta2 = new Paletas ("chocolate con chips", "chocolate", 450,10)
const paleta3 = new Paletas ("tramontana", "americana con galletitas de chocolate", 450,6)
const paleta4 = new Paletas ("frutillita", "frutilla", 500,20)
const paleta5 = new Paletas ("banana split", "banana y dulce de leche", 500,5)

// creo un array para mi catálogo
listaPaletasCatalogo = []
listaPaletasCatalogo.push(paleta1,paleta2,paleta3,paleta4,paleta5)
//evento para el boton del catálogo
botonCatalogo.addEventListener("click", function(){
    resultadoContenedor2.innerHTML = ""
    //guardo el array en el localStorage
    localStorage.setItem("catalogo", JSON.stringify(listaPaletasCatalogo))
    //llamo a la funcion que muestra el catalogo en el DOM
    mostrarPaletasCatalogo()
    

})

let mostrarPaletasCatalogo = () =>{
   
    //vacio el div para no repetir contenido.
    resultadoContenedor2.innerHTML = ""
    
    //recorro el array del catálogo y lo imprimo en el DOM
    listaPaletasCatalogo.forEach(function(elemento){
      resultadoContenedor2.innerHTML += `Nombre: ${elemento.nombre}, Sabor: ${elemento.sabor}, Precio: ${elemento.precio}, Cantidad en stock: ${elemento.stock}<br/>`
    })
    //tmb recorro el array de las paletas que agrego
    listaPaletas.forEach(function(elemento){
        resultadoContenedor2.innerHTML += `Nombre: ${elemento.nombrePaleta}, Sabor: ${elemento.saborPaleta}, Precio: ${elemento.precioPaleta}, Cantidad en stock: ${elemento.stockPaleta}<br/>`
      })

}
