class ProductsDetailsView {
  static renderProductDetails(product) {
    console.log(product);

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
                <span class="qty-value">1</span>
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
    CartController.updateItemQuantity("user1", productId, qtyValue.textContent);
  });

  qtyMinus.addEventListener("click", () => {
    let currentQty = parseInt(qtyValue.textContent);
    if (currentQty > 1) {
      qtyValue.textContent = currentQty - 1;
    }
  });

  qtyPlus.addEventListener("click", () => {
    let currentQty = parseInt(qtyValue.textContent);
    qtyValue.textContent = currentQty + 1;
  });
});
