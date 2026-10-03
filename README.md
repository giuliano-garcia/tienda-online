# tienda-online
venta de indumentaria deportiva

 Descripción de la página

Esta página web es una tienda online de indumentaria deportiva, donde los usuarios pueden visualizar diferentes productos como remeras, buzos, pantalones y shorts.

Cada producto cuenta con su imagen, nombre y precio, y puede ser agregado al carrito de compras mediante el botón "Agregar".

En el carrito, los productos seleccionados se muestran individualmente y el usuario puede eliminar productos. Además, el sistema calcula automáticamente el precio total de la compra según los productos agregados.

La página está desarrollada utilizando HTML, CSS, JavaScript y Bootstrap, utilizando JavaScript para generar dinámicamente los productos, administrar el carrito y calcular el total.


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
(el ejercicio original era un mini carrito de compras,lo adapte a una tienda de ropa)
ejemplo:

const productos = [
    { id: 1, title: "Remera Argentina", imagen: "img/remera-argentina.jpg", icon: "👕", price: 25000 },
    { id: 2, title: "Buzo", imagen: "img/remera-argentina.jpg", icon: "🧥", price: 40000 },
    { id: 3, title: "Pantalón", imagen: "img/remera-argentina.jpg", icon: "👖", price: 35000 },
    { id: 4, title: "Short", imagen: "img/remera-argentina.jpg", icon: "🩳", price: 20000 },
];

La nueva propiedad:

imagen: "img/remera-argentina.jpg"


se mantiene  icon aunque se agrrego  agrego > imágenes

Esto puede confundirte.

Tenemos:

icon: "👕"

y también:

imagen: "img/remera-argentina.jpg"

No hacen exactamente lo mismo.

imagen

Se utiliza en la tarjeta del producto:

<img src="${producto.imagen}">



icon

Todavía se utiliza en el carrito:

${item.icon} ${item.title}

Por eso no se elimino.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

2- Cambie el funcionamiento del carrito anterior 

Teníamos:

const productFind = productos.find(
    (producto) => producto.id === idProduct
);

const searchProduct = carrito.find(
    (prod) => prod.id === idProduct
);

La segunda línea buscaba si el producto ya estaba en el carrito.

Después:

if (!searchProduct) {
    carrito.push(productFind);
    alert("✅Producto agregado al carrito");
    generateCardsCart();
    calcTot();
} else {
    alert("❌El producto ya se encuentra en el carrito");
}

Eso provocaba que solamente pudieras tener un producto de cada tipo.

////////////
Nuevo

Eliminamos:

const searchProduct = carrito.find(
    (prod) => prod.id === idProduct
);

También eliminamos:

if (!searchProduct) {

/////////////
y:

} else {
    alert("❌El producto ya se encuentra en el carrito");
}

//////////
Y dejamos:

const productFind = productos.find(
    (producto) => producto.id === idProduct
);

carrito.push(productFind);

alert("✅ Producto agregado al carrito");

generateCardsCart();
calcTot();
¿Qué conseguimos?

Ahora:

carrito.push(productFind);

se ejecuta cada vez que apretamos Agregar.

Entonces podemos tener:

Short
Short
Short