class ProductDetailsController {
  static getProductById(productId) {
    const products = ProductModel.getAllProducts();
    const product = products.find((item) => item.id === productId);
    ProductsDetailsView.renderProductDetails(product);
  }
}


