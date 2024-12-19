class HomeView {
  static renderProducts(products, className) {
    const productsContainer = document.querySelector(className);
    for (const product of products) {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");

      productCard.innerHTML = `
            <div class="discount">- ${product.price}%</div>
            <img 
                src="${product.image}" 
                alt="${product.name}" 
                class="product-img" 
                onclick="window.location.href='./product_details.html?productId=${encodeURIComponent(
                  product.id
                )}'"
            >
            <div class="product-name">${product.name}</div>
            <div class="product-price">
                $${product.price} <span class="old-price">$${
        product.price
      }</span>
            </div>
            <div class="buttons">
                <button class="favorite-btn">&#9829;</button>
                <button class="cart-btn" onclick="CartController.addItem('user1', '${
                  product.id
                }')">Add to Cart</button>
            </div>
        `;
      productsContainer.appendChild(productCard);
    }
  }

  static reinderCategories(categories) {
    for (const cat of categories) {
      const button = document.createElement("div");
      button.className = "icon-box";
      button.id = "cat" + cat.id;

      const img = document.createElement("img");
      img.src = cat.image_url;
      img.alt = cat.name;
      button.appendChild(img);

      button.addEventListener("click", () => {
        const categoryName = encodeURIComponent(cat.name);
        window.location.href = `category_products.html?categoryName=${categoryName}`;
      });

      const text = document.createTextNode(cat.name);
      button.appendChild(text);

      document.getElementById("icon-grid").appendChild(button);
    }
  }
}
