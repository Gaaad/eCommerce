class WishlistModel {
  static loadWhislistProducts(userId) {
    const whishlistData = this.loadWhislist(userId);
    const products = ProductModel.getAllProducts();

    const filteredProducts = products.filter((product) =>
      whishlistData.some((item) => item.productId == `${product.id}`)
    );

    return filteredProducts;
  }

  static loadWhislist(userID) {
    const whishlistData = localStorage.getItem("whislist:" + userID);

    return whishlistData ? JSON.parse(whishlistData) : [];
  }

  static saveWishlist(userId, whishlist) {
    localStorage.setItem("whislist:" + userId, JSON.stringify(whishlist));
  }

  static addItem(userId, productId) {
    const whislist = this.loadWhislist(userId);

    const exist = whislist.find((item) => item.productId === productId);

    if (exist) {
      this.removeItem(userId, productId);
      alert("Product removed successfully from your whishlist");
    } else {
      whislist.push({ productId });
      this.saveWishlist(userId, whislist);
      alert("Product added successfully to your whishlist");
    }
  }

  static removeItem(userId, productId) {
    const whislist = this.loadWhislist(userId).filter(
      (item) => item.productId !== productId
    );

    this.saveWishlist(userId, whislist);
  }
}
