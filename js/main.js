// VALIDACION DE EDAD ---------------------------

const inputName = document.querySelector('.inputName');
const inputAge = document.querySelector('.inputAge');
const inputButton = document.querySelector('.inputButton');

inputButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    const textName = inputName.value;
    const textAge = inputAge.value;

    if (textAge >= 18) {
        const user = document.querySelector('.user');
        user.textContent = textName;
        document.getElementById('pagina').style.display = "flex";
        document.getElementById('datosPersona').style.display = "none";
        document.getElementById('navBar').style.display = "flex";
    }

    else {
        const mensajeError = document.querySelector('.mensajeError');
        document.querySelector('.tituloValidador').style.display = "none";
        document.querySelector('.formValidador').style.display = "none";
        mensajeError.innerHTML = "Lo siento " + textName + ", pero tenés que ser mayor de edad para poder usar este sistema.<br><br>Buscá ayuda de un adulto y volvelo a intentar.";
    }
})

// PELICULAS (OBJETOS Y ARRAY) ------------------

function constructorPelicula(sala, titulo, genero, categoria, entradasDisponibles, imagen) {
    this.sala = sala;
    this.titulo = titulo;
    this.categoria = categoria;
    this.entradasDisponibles = entradasDisponibles;
    this.genero = genero;
    this.imagen = imagen;
}

const pelicula0 = new constructorPelicula("SALA 1", "Ironman", "ATP", "Acción", 200, "./images/ironman.jpg");
const pelicula1 = new constructorPelicula("SALA 2", "Harry Potter", "ATP", "Infantil", 200, "./images/harry.jpg");
const pelicula2 = new constructorPelicula("SALA 3", "El Orfanato", "+16", "Terror", 200, "./images/orfanato.jpg");
const pelicula3 = new constructorPelicula("SALA 4", "Juego del Miedo", "+16", "Suspenso", 200, "./images/saw.jpg");
const pelicula4 = new constructorPelicula("ESTRENO", "Relatos Salvajes", "+13", "Suspenso", 200, "./images/relatos.jpg");
const pelicula5 = new constructorPelicula("ESTRENO", "Joker", "Drama", "+13", 200, "./images/joker.jpg");
const pelicula6 = new constructorPelicula("ESTRENO", "IT2", "Terror", "+16", 200, "./images/it.jpg");
const pelicula7 = new constructorPelicula("ESTRENO", "Madagascar", "ATP", "Infantil", 200, "./images/madagascar.jpg");

const peliculas = [pelicula0, pelicula1, pelicula2, pelicula3, pelicula4, pelicula5, pelicula6, pelicula7];

// CARTELERA ------------------------------------

for (let i = 0; i < 4; i += 1) {
    const cartelera = document.querySelector('.cartelera');
    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta";
    cartelera.appendChild(tarjeta);
    const span = document.createElement("span");
    span.textContent = peliculas[i].sala;
    tarjeta.appendChild(span);
    const img = document.createElement("img");
    img.src = peliculas[i].imagen;
    tarjeta.appendChild(img);
}

// PROXIMOS ESTRENOS ----------------------------

for (let i = 4; i < peliculas.length; i += 1) {
    const estrenos = document.querySelector('.estrenos');
    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta";
    estrenos.appendChild(tarjeta);
    const span = document.createElement("span");
    span.textContent = peliculas[i].sala;
    tarjeta.appendChild(span);
    const img = document.createElement("img");
    img.src = peliculas[i].imagen;
    tarjeta.appendChild(img);
}

// BOLETERIA (OBJETOS Y ARRAY) ------------------

// Creando los objetos y arrays de productos, e insertandolos en el HTML
// Creando el carrito vacío y funcionalidades del boton Comprar

function constructorProducto(id, nombre, precio, cantidad, img) {
    this.id = id,
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
    this.img = img;
}

const producto0 = new constructorProducto(01, "ENTRADA SALA 1 - Turbo", 1100, 1, "../images/ticket.jpg");
const producto1 = new constructorProducto(02, "ENTRADA SALA 2 - 3D", 1000, 1, "../images/ticket.jpg");
const producto2 = new constructorProducto(03, "ENTRADA SALA 3", 900, 1, "../images/ticket.jpg");
const producto3 = new constructorProducto(04, "ENTRADA SALA 4", 900, 1, "../images/ticket.jpg");
const producto4 = new constructorProducto(05, "GASEOSA", 500, 1, "../images/gaseosa.jpg");
const producto5 = new constructorProducto(06, "POCHOCLOS", 600, 1, "../images/pochoclos.jpg");
const producto6 = new constructorProducto(07, "COMBO 1", 1000, 1, "../images/combo1.jpg");
const producto7 = new constructorProducto(08, "COMBO 2", 1900, 1, "../images/combo2.jpg");


const productos = [producto0, producto1, producto2, producto3, producto4, producto5, producto6, producto7];

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

productos.forEach((producto) => {
    const pizarraContent = document.getElementById("pizarraContent")
    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML =
        `
    <img src="${producto.img}">
    <p>${producto.nombre}</p>
    <p>$${producto.precio}</p>
    `;
    pizarraContent.append(card);

    let comprar = document.createElement("button");
    comprar.className = "addButton";
    comprar.innerText = "Agregar al carrito";
    card.append(comprar);

    comprar.addEventListener("click", () => {

        const repeat = carrito.some((repeatProducto) => repeatProducto.id === producto.id);
        if (repeat) {
            carrito.map((prod) => {
                if (prod.id === producto.id) {
                    prod.cantidad++
                }
            });
        } else {
            carrito.push({
                id: producto.id,
                nombre: producto.nombre,
                precio: producto.precio,
                cantidad: producto.cantidad,
                img: producto.img,
            });
        }
        contadorCarrito();
        saveLocal();
        pintarCarrito();
        console.log(carrito);
    });
});

// CARRITO --------------------------------------

// Capturando botones Ver y Borrar carrito, Cantidad carrito y el Modal

const verCarrito = document.getElementById("verCarrito");
const borrarCarrito = document.getElementById("borrarCarrito");
const modalContainer = document.getElementById("modalContainer");
const cantidadCarrito = document.getElementById("cantidadCarrito");

// FUNCION PINTAR CARRITO

const pintarCarrito = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modalHeader";
    modalHeader.innerHTML = `
        <h1 class="modalHeader-titulo">Carrito</h1>
    `;
    modalContainer.append(modalHeader);

    const modalButton = document.createElement("button");
    modalButton.innerText = "x";
    modalButton.className = "modalHeaderButton";
    modalHeader.append(modalButton);

    const modalEmpty = document.createElement("p");
    modalEmpty.className = "carritoEmpty";
    modalContainer.append(modalEmpty);

    modalButton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    })

    carrito.forEach((producto) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "carritoContent";
        carritoContent.innerHTML = `
        <img src="${producto.img}">
        <div class="item-nom">${producto.nombre}</div>               
        <div class="item-can">Cantidad: ${producto.cantidad}</div>
        <div class="item-pre">$${producto.precio * producto.cantidad}</div>        
    `;
        modalContainer.append(carritoContent);

        let eliminar = document.createElement("span");
        eliminar.innerHTML = "X";
        eliminar.className = "deleteProducto";
        carritoContent.append(eliminar);
        eliminar.addEventListener("click", () => eliminarProducto(producto.id));
    });

    const total = carrito.reduce((acc, el) => acc + (el.precio * el.cantidad), 0);

    const totalCompra = document.createElement("div");
    modalContainer.append(totalCompra);
    totalCompra.className = "totalCompra";
    totalCompra.innerHTML = `
        <p class= "totalCarrito">TOTAL</p>
        <p class= "totalCarritoPrecio">$${total}</p>
    `;
    modalContainer.append(totalCompra);

    if (carrito.length === 0) {
        modalEmpty.innerText = "El carrito está vacío :("
    }
    else {
        modalEmpty.innerText = ""
    }
};

verCarrito.addEventListener("click", pintarCarrito);

// FUNCION CONTADOR CARRITO

const contadorCarrito = () => {
    cantidadCarrito.style.display = "initial";
    const carritoLength = carrito.length;
    localStorage.setItem("carritoLength", JSON.stringify(carrito.length))
    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
}

// FUNCION VACIAR CARRITO

const vaciarCarrito = () => {
    for (let i = 0; i < carrito.length; i += 1) {
        carrito.splice(i);
        contadorCarrito();
        saveLocal();
        pintarCarrito();
        console.log(carrito);
    };
};

borrarCarrito.addEventListener("click", vaciarCarrito);

// FUNCION ELIMINAR PRODUCTO CON LA X POR SU ID

const eliminarProducto = (id) => {
    const foundId = carrito.find((element) => element.id == id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });

    contadorCarrito();
    saveLocal();
    pintarCarrito();
}

// LOCALSTORAGE ---------------------------------

// Creando la funcion para guardar en localStorage

const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};

// CONTACTO (SCRIPT DEL FORM) -------------------

const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();
        btn.value = 'Enviando mensaje...';
        const serviceID = 'default_service';
        const templateID = 'template_y0aome1';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Enviar Mensaje';
                const mensajeEnviado = document.querySelector('.mensajeEnviado');
                const mensaje = document.createElement("p");
                mensaje.textContent = "Su mensaje ha sido enviado con éxito!";
                mensajeEnviado.appendChild(mensaje);
            }, (err) => {
                btn.value = 'Enviar Mensaje';
                alert(JSON.stringify(err));
            });
    });

    contadorCarrito();