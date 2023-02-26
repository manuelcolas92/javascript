alert("Debes ser mayor de 18 años para usar este sistema");

function reservarEntradas() {

    let libres = 200
    let nombre = prompt("Ingresá tu nombre")
    let edad = parseInt(prompt("Ingresa tu edad"))
    let precioEntrada = 1000

    if (edad >= 18) {
        alert("Bienvenido/a " + nombre)
        console.log("usuario válido")
    }
    else {
        do {
            alert("Lo siento " + nombre + " debés ser mayor de edad")
            console.log("usuario inválido")
            edad = parseInt(prompt("Ingresa tu edad"))
        }
        while (edad < 18)
    }

    let pelicula0 = {
        titulo: "Ironman",
        genero: "Acción",
    }

    let pelicula1 = {
        titulo: "HarryPotter",
        genero: "Infantil",
    }

    let pelicula2 = {
        titulo: "Juego del Miedo",
        genero: "Suspenso",
    }

    let pelicula3 = {
        titulo: "Titanic",
        genero: "Drama",
    }

    let pelicula4 = {
        titulo: "Avatar",
        genero: "Acción",
    }

    let pelicula5 = {
        titulo: "Borat",
        genero: "Comedia",
    }

    const peliculas = [pelicula0, pelicula1, pelicula2, pelicula3]
    console.log("Cantidad de películas en cartelera " + peliculas.length)

    for (let i = 0; i < peliculas.length; i += 1) {
        console.log("Las películas son: " + peliculas[i]);
    }

    alert("La cartelera es:\n \n" + pelicula0.titulo + "\n" + pelicula1.titulo + "\n" + pelicula2.titulo + "\n" + pelicula3.titulo)

    alert("Por ser el primer Jueves del mes, se agregron dos películas nuevas y se quitaron las dos mas antiguas")

    peliculas.push(pelicula4)
    peliculas.push(pelicula5)
    peliculas.shift()
    peliculas.shift()

    for (let i = 0; i < peliculas.length; i += 1) {
        console.log("Las nuevas películas son: " + peliculas[i]);
    }

    alert("La nueva cartelera es:\n\n" + pelicula2.titulo + "\n" + pelicula3.titulo + "\n" + pelicula4.titulo + "\n" + pelicula5.titulo)

    let pelicula = (prompt("Ingresá el nombre de la película que quieras ver: \n\n" + pelicula2.titulo + "\n" + pelicula3.titulo + "\n" + pelicula4.titulo + "\n" + pelicula5.titulo))

    if ((pelicula == pelicula2.titulo) || (pelicula == pelicula3.titulo) || (pelicula == pelicula4.titulo) || (pelicula == pelicula5.titulo)) {
        alert("Tu película es " + pelicula)
    }
    else {
        do {
            alert("La película no está en cartelera")
            console.log("película no encontrada")
            pelicula = (prompt("Ingresá el nombre de la película que quieras ver: \n \n" + pelicula2.titulo + "\n" + pelicula3.titulo + "\n" + pelicula4.titulo + "\n" + pelicula5.titulo))
        }
        while ((pelicula != pelicula2.titulo) && (pelicula != pelicula3.titulo) && (pelicula != pelicula4.titulo) && (pelicula != pelicula5.titulo))
    }

    let reservadas = parseInt(prompt("Indicá el número de entradas que quiera reservar, quedan " + libres + " entradas disponibles" + "\n\n" + "Precio de la entrada: $" + precioEntrada + " cada una"))
    if (reservadas <= libres) {
        alert("Acabás de reservar " + reservadas + " entradas para ver " + pelicula + " por un valor de $" + (precioEntrada * reservadas) + ", quedan disponibles " + (libres - reservadas))
        console.log("se reservaron " + reservadas + " entradas para ver " + pelicula + " quedan disponibles " + (libres - reservadas))
    }
    else {
        do {
            alert("El número de entradas que querés reservar no está disponible")
            console.log("entradas no disponibles")
            reservadas = parseInt(prompt("Indicá el número de entradas que quieras reservar, quedan " + libres + " entradas disponibles"))
        } while (reservadas > libres)
    }
}

function reservarComida() {

    const precioCarrito = []
    let cantidad = 3

    let comida0 = {
        comidaNombre: "Gaseosa",
        comidaPrecio: 300,
    }

    let comida1 = {
        comidaNombre: "Pochoclos",
        comidaPrecio: 800,
    }

    let comida2 = {
        comidaNombre: "Chocolate",
        comidaPrecio: 500,
    }

    let comida3 = {
        comidaNombre: "Ninguno",
        comidaPrecio: 0,
    }

    do {
        let item = prompt("Con tu combo podés ingresar hasta 3 productos de comida, no importa si se repiten:\n\n" + comida0.comidaNombre + " $" + comida0.comidaPrecio + "\n" + comida1.comidaNombre + " $" + comida1.comidaPrecio + "\n" + comida2.comidaNombre + " $" + comida2.comidaPrecio + "\n\n" + "Escribe como opción la palabra - Ninguno - en caso de no querer seguir eligiendo");
        if (item == comida0.comidaNombre) {
            precioCarrito.push(comida0.comidaPrecio)
            alert("Has seleccionado: " + comida0.comidaNombre)
        }
        else if (item == comida1.comidaNombre) {
            precioCarrito.push(comida1.comidaPrecio)
            alert("Has seleccionado: " + comida1.comidaNombre)
        }
        else if (item == comida2.comidaNombre) {
            precioCarrito.push(comida2.comidaPrecio)
            alert("Has seleccionado: " + comida2.comidaNombre)
        }
        else if (item == comida3.comidaNombre) {
            precioCarrito.push(comida3.comidaPrecio)
            alert("Has seleccionado: " + comida3.comidaNombre)
        }
        else { alert("El producto no está disponible") }

    } while (precioCarrito.length < cantidad)

    let res = precioCarrito.reduce(
        (sum, item) => sum + item,
        0
    )
    alert("El precio final de tu combo es de $" + res + ", que disfrutes de tu función!")
    console.log("combo generado por $" + res)
}

reservarEntradas()
reservarComida()
