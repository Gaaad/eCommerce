class CartModel {
    static loadCart(userId) {
        const cartData = localStorage.getItem(userId);
        return cartData ? JSON.parse(cartData) : [];
    }

    static saveCart(userId, cart) {
        localStorage.setItem(userId, JSON.stringify(cart));
    }

    static addItem(userId, productId) {
        const cart = this.loadCart(userId);
        const exist = cart.find(item => item.productId === productId);
        if (exist) {
            exist.quantity += 1;
        } else {
            cart.push({ productId, quantity: 1 });
        }
        this.saveCart(userId, cart);
    }

    static removeItem(userId, productId) {
        const cart = this.loadCart(userId).filter(item => item.productId !== productId);
        this.saveCart(userId, cart);
    }

    static updateItemQuantity(userId, productId, quantity) {
        const cart = this.loadCart(userId);
        const item = cart.find(item => item.productId === productId);
        if (item) {
            item.quantity = quantity;
        }
        else{
            cart.push({ productId, quantity: 1 });
        }
        this.saveCart(userId, cart);
    }

    static getCartWithDetails(userId) {
        const cart = this.loadCart(userId);
        const products = ProductModel.getAllProducts();
        return cart.map(cartItem => {
            const product = products.find(prod => prod.id === cartItem.productId);
            return {
                productId: cartItem.productId,
                name: product.name,
                price: product.price,
                quantity: cartItem.quantity,
                total: product.price * cartItem.quantity,
                image: product.image, 
            };
        });
    }

    static clearCart(userId) {
        this.saveCart(userId, []);
    }
}
