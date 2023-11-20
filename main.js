

//sitio de venta de paletas heladas


//fción constructora con un metodo para crear nuevas paletas y mostrar los datos ingresados por el usuario
class Paletas {
    constructor (id, nombre, sabor, precio){
        this.id = id,
        this.nombre = nombre,
        this.sabor = sabor,
        this.precio = precio
    }
    mostrarDatosIngresados(){
        console.log(`La paleta ${this.nombre} tiene sabor a ${this.sabor} y su precio es ${this.precio}`)
    }
}
//instancio un objeto con datos puestos por mi
const paleta1 = new Paletas (1, "oreo", "galletitas", 450)
const paleta2 = new Paletas (2, "chocolate con chips", "chocolate", 450)
const paleta3 = new Paletas (3, "tramontana", "americana con galletitas de chocolate", 450)
const paleta4 = new Paletas (4, "frutillita", "frutilla", 500)
const paleta5 = new Paletas (5, "banana split", "banana y dulce de leche", 500)


//creo un array vacio para guardar con push la paleta1
const listaPaletas = []
listaPaletas.push(paleta1, paleta2, paleta3, paleta4, paleta5)
//console.log(listaPaletas)


//funcion que pide tres datos al usuario para el caso 1 del menú
function agregarPaleta(){
    let nombreI = prompt("Ingrese el nombre de la paleta")
    let saborI = prompt("Ingrese el sabor de la paleta")
    let precioI = parseInt(prompt("Ingrese el precio de la paleta"))
//instancio los objetos nuevos con la class
    const paleta6 = new Paletas (listaPaletas.length+1, nombreI, saborI, precioI)//con length+1 los id no se repiten
    //console.log(paleta6)
    paleta6.mostrarDatosIngresados()
    //agrego la paleta2 a mi array listaPaletas con push
    listaPaletas.push(paleta6)
    console.log(listaPaletas)
}

//función para case 3 del menú 
function consultarCatalogo(array){//array=listaPaletas se pasa este nombre en el llamado en el menú
    console.log("Nuestro catálogo es: ")
    //con el for...of recorro todos los elementos del array listaPaletas
    for(const paleta of array){
        console.log(paleta.id, paleta.nombre, paleta.sabor, paleta.precio)
    }
}
    

//ESTRUCTURA PARA UN MENÚ: hecho con do while y switch
//el ciclo se repite mientras no se escriba el 4 donde salirMenu=false
function menu() {
    let salirMenu = true
    do{
    let opcionIngresada = parseInt(prompt(`Ingrese la opción deseada
        1 - Agregar Paleta
        2 - Borrar Paleta
        3 - Consultar catálogo
        4 - Salir del menu`))
        switch(opcionIngresada){
            case 1:
                agregarPaleta()
             break;
            case 2:
                console.log("Borrar paleta")
            break;
            case 3:
                consultarCatalogo(listaPaletas)//aqui paso en parametro el nombre del array
            break;
            case 4:
                console.log(`Gracias por utilizar nuestra app. Saludos!`)
                salirMenu = false
            break;  
            default:
                console.log("Opción no válida, ingrese alguna presente en el menu")
            break;
        }
    }while(salirMenu)
    
    }
    //LLAMADO DE LA FCIÓN MENÚ
    menu()