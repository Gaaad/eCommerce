class CartController {
    static updateItemQuantity(userId, productId, newQuantity) {
        newQuantity = parseInt(newQuantity, 10);
        if (newQuantity > 0) {
            CartModel.updateItemQuantity(userId, productId, newQuantity);
        } else {
            CartModel.removeItem(userId, productId);
        }
        this.loadCart('user1');
    }

    static loadCart(userId){
        const cart = CartModel.getCartWithDetails(userId);
       
        CartView.rendercart(cart);
    }

    static removeItem(userId, productId) {
        CartModel.removeItem(userId, productId);
        this.loadCart('user1');
    }

    static addItem(userId, productId) {   
        CartModel.addItem(userId, productId);
    }
}
document.addEventListener("DOMContentLoaded", () => {
    CartController.loadCart('user1');
  });