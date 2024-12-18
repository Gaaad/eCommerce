class ProductDetailsController {
  static getProductById(productId) {
    const products = ProductModel.getAllProducts();
    const product = products.find((item) => item.id === productId);
    ProductsDetailsView.renderProductDetails(product);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("productId");
  ProductDetailsController.getProductById(productId);
});
