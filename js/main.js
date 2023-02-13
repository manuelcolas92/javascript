alert("Debes ser mayor de 18 años para usar este sistema");

function reservarEntradas(){

let libres = 200
let nombre = prompt("Ingresá tu nombre")
let edad = parseInt(prompt("Ingresa tu edad"))

if (edad >= 18) {
    alert("Bienvenido " + nombre)
    console.log("usuario válido")
}
else {
    do {
        alert("Lo siento " + nombre + " debes ser mayor de edad")
        console.log("usuario inválido")
        edad = parseInt(prompt("Ingresa tu edad"))
    }
    while (edad < 18)
}

let pelicula = (prompt("Ingresar el nombre de la película que quieras ver: \nIronman \nHarry Potter \nJuego del Miedo \nTitanic"))

if ((pelicula == "Ironman") || (pelicula == "Harry Potter") || (pelicula == "Juego del Miedo") || (pelicula == "Titanic")) {
    alert("Tu película es " + pelicula)
}
else {
    do {
        alert("La película no está en cartelera")
        console.log("película no encontrada")
        pelicula = (prompt("Ingresar el nombre de la película que quieras ver: \nIronman \nHarry Potter \nJuego del Miedo \nTitanic"))
    }
    while ((pelicula != "Ironman") && (pelicula != "Harry Potter") && (pelicula != "Juego del Miedo") && (pelicula != "Titanic"))
}

let reservadas = parseInt(prompt("Indique el número de entradas que quiera reservar, quedan " + libres + " entradas disponibles"))
if (reservadas <= libres) {
    alert("Usted acaba de reservar " + reservadas + " entradas para ver " + pelicula + " quedan disponibles " + (libres - reservadas))
    console.log("se reservaron " + reservadas + " entradas para ver " + pelicula + " quedan disponibles " + (libres - reservadas))
}
else {
    do {
        alert("El número de entradas que usted quiere reservar no está disponible")
        console.log("entradas no disponibles")
        reservadas = parseInt(prompt("Indique el número de entradas que quiera reservar, quedan " + libres + " entradas disponibles"))
    } while (reservadas > libres)
}}

reservarEntradas()