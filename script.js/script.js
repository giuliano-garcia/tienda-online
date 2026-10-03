//Lista de productos
const productos = [
    { id: 1, title: "Remera Argentina", imagen: "img/remera-argentina.jpg", icon: "👕", price: 25000 },
    { id: 2, title: "Buzo", imagen: "img/remera-argentina.jpg", icon: "🧥", price: 40000 },
    { id: 3, title: "Pantalón", imagen: "img/remera-argentina.jpg", icon: "👖", price: 35000 },
    { id: 4, title: "Short", imagen: "img/remera-argentina.jpg", icon: "🩳", price: 20000 },
];

//variable del carrito
const carrito = [];

const containerCards = document.getElementById("container-cards");
const containerCart = document.querySelector("#container-cart");

//generemos las tarjetas de los productos del array
const generateCardsProducts = () => {
    //ALGORITMO
    //ENTRADA: array de productos
    //PROCESOS: Recorrer el array y por cada producto crear la tarjeta. Donde se va a renderizar
    //SALIDA: Las tarjetas renderizadas en el navegador dentro de su contenedor

    productos.map((producto) => {
        const col = document.createElement("div"); //creando un nodo
        col.classList = "col mb-3";
        //<div class="col"></div>
        const card = /*HTML */ `<div class="card">
              <div class="card-body">
               <img src="${producto.imagen}" class="card-img-top" alt="${producto.title}" style="height: 300px; object-fit: cover;"><h5 class="card-title">${producto.title}</h5>
                <p class="card-text fs-3">$${producto.price}</p>
                <div class="d-grid">
                <button class="btn btn-outline-success" onclick="addCart(${producto.id})">🧺Agregar</button>
                </div>
              </div>
            </div>`;
        col.innerHTML = card;
        containerCards.append(col);
    });
};

const addCart = (idProduct) => {
    console.log(idProduct);

    const productFind = productos.find(
        (producto) => producto.id === idProduct
    );

    carrito.push(productFind);

    alert("✅ Producto agregado al carrito");

    generateCardsCart();
    calcTot();
};

const calcTot = () => {
    //calcular el precio total de los productos que hay en el carrito
    //ALGORITMO
    /*
  ENTRADA: el array carrito
  PROCESO: voy a recorrer cada elemento del carrito, voy a ir sumando el precio de cada uno de 
  los productos y guardándolo en un acumulador.
  SALIDA: el valor almacenado en el acumulador
  */

    const total = carrito.reduce(
        (acum, produc) => acum + produc.price,
        0
    );
    document.querySelector("#tot").textContent = total;
    // const propina = (total * 10) / 100;
    // document.querySelector("#propina").textContent = propina;
    // const impuesto = (total * 21) / 100;
    // document.querySelector("#impuesto").textContent = impuesto;
    // const totalFinal = total + propina + impuesto;
    // document.getElementById("total-final").textContent = totalFinal;
};

const generateCardsCart = () => {
    containerCart.innerHTML = "";
    carrito.map((item) => {
        const content = document.createElement("div");
        content.classList = "row";

        const datos = /*HTML*/ `<div class="col fw-bold d-flex align-items-center">
    <p>${item.icon} ${item.title} <span class="text-danger" onclick="deleteProductCart(${item.id})">x</span></p>
    <div class="col d-flex justify-content-end align-items-center">
    <p>$${item.price}</p>
    </div>
  </div>`;

        content.innerHTML = datos;
        /*
        <div class="row">
          <div class="col fw-bold d-flex align-items-center">
              <p>${item.icon} ${item.title}</p>
              <div class="col d-flex justify-content-end align-items-center">
              <p>$${item.price}</p>
              </div>
          </div>
        </div>
        */
        containerCart.append(content);
    });
};

const deleteProductCart = (id) => {
    //buscar la posición del elemento a borrar usando el id
    const index = carrito.findIndex((item) => item.id === id); //posición del producto en el carrito || -1
    if (index >= 0) {
        const validar = confirm(
            `Estás seguro que querés borrar ${carrito[index].title} del carrito?`,
        );

        if (validar) {
            //método de arrays para borrar elementos
            carrito.splice(index, 1);
            generateCardsCart();
            calcTot();
        }
    }
};

generateCardsProducts();