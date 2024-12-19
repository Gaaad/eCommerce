const ProductModel = {
  getAllProducts: function () {
    return JSON.parse(localStorage.getItem("products")) || [];
  },
  addProduct: function (product) {
    const products = this.getAllProducts();
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));
  },
  updateProduct: function (productId, updatedProduct) {
    const products = this.getAllProducts().map((product) =>
      product.id === productId ? updatedProduct : product
    );
    localStorage.setItem("products", JSON.stringify(products));
  },
  deleteProduct: function (productId) {
    const products = this.getAllProducts().filter(
      (product) => product.id !== productId
    );
    localStorage.setItem("products", JSON.stringify(products));
  },
  getProductsByCategory: function (categoryName) {
    const products = JSON.parse(localStorage.getItem("products"));
    return products.filter((product) => product.category === categoryName);
  },
};
