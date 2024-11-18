const productos = [
    { id: 1, titulo: "PULSERA NUEVA", descripcion: "Producto hecho a base de manos", precio: 200, imagen: "images/1.jpg" },
    { id: 2, titulo: "PULSERA NUEVA", descripcion: "Producto hecho a base de manos", precio: 10, imagen: "images/2.jpg" },
    { id: 3, titulo: "PULSERA NUEVA", descripcion: "Producto hecho a base de manos", precio: 20, imagen: "images/3.jpg" },
    { id: 4, titulo: "PULSERA NUEVA", descripcion: "Producto hecho a base de manos", precio: 20, imagen: "images/4.jpg" },
];


const container = document.getElementById("product-container");

productos.forEach(producto => {
    const productHTML = `
        <div class="product">
            <img src="${producto.imagen}" alt="${producto.titulo}">
            <div class="product-txt">
                <h3>${producto.titulo}</h3>
                <p>${producto.descripcion}</p>
                <p class="precio"> $${producto.precio}</p>
                <a href="#" class="agregar-carrito btn-2" data-id="${producto.id}">Agregar al carrito</a>
            </div>
        </div>
    `;
    container.innerHTML += productHTML; // Inserta el producto en el contenedor
});

