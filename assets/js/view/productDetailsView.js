class ProductsDetailsView {
  static renderProductDetails(product) {

    var productContainer = document.getElementById("product-container");

    productContainer.innerHTML = `
    <main class="product-container">
        <section class="product-image">
            <img src=${product.image} alt="no image loaded">
        </section>

        <aside class="product-details">
            <h1 class="product-title">${product.name}</h1>

            <p class="price">${product.price}</p>

            <p class="description">${product.description}</p>

            
            <div class="quantity">
                <button class="qty-btn-minus">-</button>
                
                <input type="number" class="qty-value" max="${product.stock}" min="1" readonly value="1">
                <button class="qty-btn-plus" >+</button>
                <button class="add-to-chart" >Add To Cart</button>
            </div>


        </aside>
    </main>
    `;
  }
}
document.addEventListener("DOMContentLoaded", () => {
  
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("productId");
  ProductDetailsController.getProductById(productId);
  const qtyMinus = document.querySelector(".qty-btn-minus");
  const qtyPlus = document.querySelector(".qty-btn-plus");
  const qtyValue = document.querySelector(".qty-value");
  const btnAddToCart = document.querySelector(".add-to-chart");

  btnAddToCart.addEventListener("click", () => {
    debugger;
    console.log(qtyValue.value);
    CartController.updateItemQuantity("user1", productId, qtyValue.value);
  });

  qtyMinus.addEventListener("click", () => {
    let currentQty = parseInt(qtyValue.value);
    if (currentQty > 1) {
      qtyValue.value = currentQty - 1;
    }
  });

  qtyPlus.addEventListener("click", () => {
    let currentQty = parseInt(qtyValue.value);
    const maxStock = parseInt(qtyValue.getAttribute('max'), 10);
    if (currentQty < maxStock) {
      qtyValue.value = currentQty + 1;
    }
  });
});
