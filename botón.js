// Obtener elementos del DOM
const buyButtons = document.querySelectorAll('.product-buy');
const extraSquares = document.querySelectorAll('.extra-square');
const products = document.querySelectorAll('.product');
const descriptions = document.querySelectorAll('.product-description');
const priceUsdElement = document.getElementById('product-price-usd');
const priceBtcElement = document.getElementById('product-price-btc');

let activeIndex = -1;

// Función para mostrar el cuadro extra
function showExtraSquare(index) {
  if (activeIndex !== -1) {
    hideExtraSquare(activeIndex);
  }

  extraSquares[index].style.display = 'block';
  extraSquares[index].style.opacity = 1;
  activeIndex = index;
}

// Función para ocultar el cuadro extra
function hideExtraSquare(index) {
  extraSquares[index].style.opacity = 0;

  setTimeout(() => {
    extraSquares[index].style.display = 'none';
  }, 300); // Tiempo de espera para ocultar el cuadro
}

// Función para manejar el clic en un producto
function handleProductClick(index) {
  if (activeIndex === index) {
    hideExtraSquare(index);
    activeIndex = -1;
  } else {
    showExtraSquare(index);
  }
}

// Event listeners para los botones "Comprar"
buyButtons.forEach((button, index) => {
  button.addEventListener('click', (event) => {
    event.stopPropagation(); // Evitar que el evento de clic se propague a los productos
    showExtraSquare(index);
  });tv 
});

// Event listeners para los producto s
products.forEach((product, index) => {
  product.addEventListener('click', () => {
    handleProductClick(index);
  });

  product.addEventListener('mouseover', () => {
    const priceUsd = calcularPrecioEnUSD(index); // Reemplaza con tu lógica
    const priceBtc = calcularPrecioEnBTC(index); // Reemplaza con tu lógica

    priceUsdElement.textContent = `$${priceUsd}`;
    priceBtcElement.textContent = `${priceBtc} BTC`;

    productTooltip.style.visibility = 'visible';
  });

  product.addEventListener('mouseout', () => {
    if (activeIndex === -1) {
      extraSquares[index].style.opacity = 0;
    }
  });
});

// Event listeners para las descripciones
buyButtons.forEach((button, index) => {
  button.addEventListener('click', (event) => {
    event.stopPropagation(); // Evitar que el evento de clic se propague a los productos
    descriptions[index].style.display = 'block';
  });
});
