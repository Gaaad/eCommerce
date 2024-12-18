class HomeController {
  static loadProducts() {
    const products = ProductModel.getAllProducts();
    HomeView.renderProducts(products);
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
