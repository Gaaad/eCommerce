class HomeController {
  static loadProducts() {
    const products = ProductModel.getAllProducts();
    HomeView.renderProducts(products, ".products");
  }

  static loadCategories() {
    const categories = CategoryModel.getAllCategories();
    HomeView.reinderCategories(categories);
  }
}
document.addEventListener("DOMContentLoaded", () => {
  HomeController.loadProducts();
  HomeController.loadCategories();
});

const allproductsButtons = document.getElementById("allproducts-button");
allproductsButtons.addEventListener("click", () => {
  window.location.href = `category_products.html?categoryName=All Products`;
});
