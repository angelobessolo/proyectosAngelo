// Declaración de selectores de clases
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const iconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const carritoCompras = document.querySelector('.shoping-cart');
const resumenCarrito = document.querySelector('.cart');

const cardsContainer = document.querySelector('.cards-container')

const productDetailAside = document.querySelector('.product-detail')
const productDetailClosed = document.querySelector('.product-detail-close');

const totalPrice = document.querySelector('.total-price');
const cartNumberProducts = document.querySelector('.cart-number-products');
const flechaCart = document.querySelector('.flecha img');

const arrayProductCart = [];

// Declaración de eventos principales  Desktop & Mobile Menu
menuEmail.addEventListener('click', toggleDesktopMenu);
function toggleDesktopMenu(){
    const carritoComprasOpen = carritoCompras.classList.contains('inactive');
    const asideOpen = productDetailAside.classList.contains('inactive');

    if(!carritoComprasOpen || !asideOpen){
        resumenCarrito.classList.add('inactive');
        productDetailAside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

iconMenu.addEventListener('click', togglemobileMenu);
function togglemobileMenu(){
    carritoComprasOpen = carritoCompras.classList.contains('inactive');

    if(!carritoComprasOpen){
        resumenCarrito.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

// Declaración de evento cierre de aside Rigth
productDetailClosed.addEventListener("click", productCloseAside);
function productCloseAside(){
    productDetailAside.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    mobileMenu.classList.add("inactive");
}

// Declaración de eventos Carrito de compras
carritoCompras.addEventListener('click', toggleresumenCarrito);
function toggleresumenCarrito(){
    const desktopMenuOpen = desktopMenu.classList.contains('inactive');
    const mobileMenuOpen = mobileMenu.classList.contains('inactive');
    const asideOpen = productDetailAside.classList.contains('inactive');

    if(!desktopMenuOpen || !mobileMenuOpen ||!asideOpen){
        desktopMenu.classList.add('inactive');
        mobileMenu.classList.add('inactive');
        productDetailAside.classList.add('inactive');
    }
    resumenCarrito.classList.toggle('inactive');
}
flechaCart.addEventListener('click', toggleresumenCarrito);



const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    description: 'Bicicleta de pista marca K&A 4 velovidades',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Iron',
    price: 50,
    description: 'Plancha de vapor 3 tipos de planchado marca Sony',
    image: 'https://images.pexels.com/photos/5202920/pexels-photo-5202920.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
});
productList.push({
    name: 'Shoes',
    price: 65,
    description: 'Zapatos Nike ultima edición 2022 UltraX',
    image: 'https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
});
productList.push({
    name: 'Car Collection',
    price: 40,
    description: 'Carro Wolsvagen de colección',
    image: 'https://images.pexels.com/photos/381228/pexels-photo-381228.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
});
productList.push({
    name: 'Drone cuadcopter',
    price: 675,
    description: 'Dron cuadcopetro de largo alcance',
    image: 'https://images.pexels.com/photos/1034812/pexels-photo-1034812.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
});
productList.push({
    name: 'Skate Board Collection',
    price: 38,
    description: 'Tabla de colección trucos',
    image: 'https://images.pexels.com/photos/2777671/pexels-photo-2777671.png?auto=compress&cs=tinysrgb&dpr=1&w=500',
});
productList.push({
    name: 'Desktop & Chair',
    price: 485,
    description: 'Escritorio + silla en algodon mega confort',
    image: 'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
});
productList.push({
    name: 'Cell Phone CA6',
    price: 325,
    description: '256 GB de almacenamiento 8 nucleos y procesador de ultima generación',
    image: 'https://images.pexels.com/photos/3756879/pexels-photo-3756879.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
});
productList.push({
    name: 'Frame Paint',
    price: 796,
    description: 'Cuadro Roberto Rangoldin edicion 3.25 original',
    image: 'https://images.pexels.com/photos/297394/pexels-photo-297394.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
});


// Renderizado de productos en pagina principal
function renderProducts(productos){
    productos.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImage = document.createElement("img");
        productImage.classList.add('product-image');
        productImage.setAttribute("src", product.image);
        productImage.addEventListener("click", function(){
            renderDetailsAside(product);
            toggleCloseMenu();
        });
      
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info')
    
        const productInfoDiv = document.createElement('div');
        const productInfoPrice = document.createElement('p');
        productInfoPrice.innerText = '$' + product.price;
        const productInfoName = document.createElement('p');
        productInfoName.innerText = product.name;
        productInfoDiv.appendChild(productInfoPrice);
        productInfoDiv.appendChild(productInfoName);
    
        const productInfoFigure = document.createElement('figure');
        productInfoFigure.classList.add('add-product-cart');
        productInfoFigure.addEventListener("click", function(){
            addProducts(product);
        });
       // productInfoFigure.addEventListener("click", addProducts);

        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        productInfoFigure.appendChild(productImgCart);
    
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.append(productImage, productInfo);
        cardsContainer.append(productCard);
    }) 
}

// Aside lateral Rigth con descripcion del producto
function renderDetailsAside(product){
    productDetailAside.classList.remove("inactive");

    const productImgeDetail = document.querySelector(".detalleImagenAside")
    const productPrice = document.querySelector(".product .parrafo .product-price-detail");
    const productName = document.querySelector(".product .parrafo .product-name-detail");
    const productDescription = document.querySelector(".product .parrafo .product-description-detail");
    productPrice.innerHTML = "$ " + product.price;
    productName.innerHTML = product.name;
    productImgeDetail.setAttribute('src', product.image);
    productDescription.innerHTML = product.description;
}

// Cerrar aside Rigth
function toggleCloseMenu(){
    desktopMenu.classList.add("inactive");
    resumenCarrito.classList.add("inactive");
    productDetailAside.classList.remove("inactive");

};


function addProducts(product){
    const shoppingCart = document.querySelector(".cart-container");
    const contentCart = document.querySelector('.content');
    

    const orderCart = document.createElement("div")
    orderCart.classList.add("order")

    const containerImageCart = document.createElement("div")
    containerImageCart.classList.add("container-image")
    const imgIconMyOrder = document.createElement("img");
    imgIconMyOrder.classList.add("product-image");
    imgIconMyOrder.setAttribute("src", product.image);

    const productName = document.createElement("p");
    productName.classList.add("name-my-order");
    productName.innerHTML =  product.name;
    const productPrice = document.createElement("p");
    productPrice.classList.add("price-my-order");
    productPrice.innerHTML = "$ "+ product.price;

    const deleteImage = document.createElement("div");
    deleteImage.classList.add('delete-image');
    const imgIconDelete = document.createElement("img");
    imgIconDelete.setAttribute("src", ".//icons/icon_close.png");


    contentCart.append(orderCart);
    orderCart.append(containerImageCart, productName, productPrice, deleteImage);
    containerImageCart.appendChild(imgIconMyOrder);
    deleteImage.appendChild(imgIconDelete);

    /*---- Actualizamos la cantidad de productos y sumamos el resuktado.*/
    totalPrice.innerHTML = '$0.00';
    
    cartNumberProducts.innerHTML = contentCart.childElementCount;
    totalPrice.innerHTML = Number(totalPrice.innerHTML.substring(1)) + product.price;
    arrayProductCart.push(Number(totalPrice.innerHTML));

    
    totalPrice.innerHTML ="$ "+ sumProducts(arrayProductCart); 

   // Elimina producto de My Order* y actualiza eldato en el carrito*/
    imgIconDelete.addEventListener("click", function(){
        orderCart.remove();
        cartNumberProducts.innerHTML =  contentCart.childElementCount;
      
        const getTotal = document.querySelectorAll(".total-price");
        const getTotalNumber = Number(Array.from(getTotal)[0].innerHTML.substring(1));

        getTotal[0].innerHTML = "$ " + (getTotalNumber - product.price);
        arrayProductCart.splice(-1,1); 
    })
}

function sumProducts(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}


renderProducts(productList);















