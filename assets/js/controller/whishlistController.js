class WishlistController {
  static loadWishlist() {
    const whishlist = WishlistModel.loadWhislistProducts();

    return whishlist;
  }
  static addItem(userId, productId) {
    WishlistModel.addItem(userId, productId);
  }
}
