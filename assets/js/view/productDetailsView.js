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

            <!-- Quantity and Buy Button -->
            <div class="quantity">
                <button class="qty-btn-minus">-</button>
                <span>1</span>
                <button class="qty-btn-plus">+</button>
                <button class="add-to-chart">Add To Cart</button>
            </div>


        </aside>
    </main>
    `;
  }
}
