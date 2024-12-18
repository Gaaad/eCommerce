const ProductController = {
  loadProducts: function () {
    const products = ProductModel.getAllProducts();
    AdminView.renderProductList(products);

    // Load categories for the product dropdown
    const categories = CategoryModel.getAllCategories();
    AdminView.renderCategoryDropdown(categories);
  },
  handleFormSubmit: function (event) {
    event.preventDefault();

    const productId = document.getElementById("product-id").value;
    const product = {
      id: productId || Date.now().toString(),
      name: document.getElementById("product-name").value,
      image: document.getElementById("product-image").value,
      category: document.getElementById("product-category").value,
      price: parseFloat(document.getElementById("product-price").value),
      description: document.getElementById("product-description").value,
      stock: parseInt(document.getElementById("product-stock").value),
    };

    if (productId) {
      ProductModel.updateProduct(productId, product);
    } else {
      ProductModel.addProduct(product);
    }

    ProductController.loadProducts();
    AdminView.resetForm();
  },
  deleteProduct: function (productId) {
    if (confirm("Are you sure you want to delete this product?")) {
      ProductModel.deleteProduct(productId);
      ProductController.loadProducts();
    }
  },
  editProduct: function (productId) {
    const products = ProductModel.getAllProducts();
    product = products.find((p) => p.id === productId);
    AdminView.fillForm(product);
  },
};

// Initialize product and category data when the page loads
document.addEventListener("DOMContentLoaded", () => {
  ProductController.loadProducts();
});

document
  .getElementById("product-form")
  .addEventListener("submit", ProductController.handleFormSubmit);
