class CategoryProductsController {
  static loadProducts() {
    let products;

    const urlParams = new URLSearchParams(window.location.search);

    const categoryName = urlParams.get("categoryName");

    const catTitle = document.getElementById("category-name");
    catTitle.innerText = categoryName;

    if (categoryName == "All Products")
      products = ProductModel.getAllProducts();
    else products = ProductModel.getProductsByCategory(categoryName);

    HomeView.renderProducts(products, ".category-products");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  CategoryProductsController.loadProducts();
});
