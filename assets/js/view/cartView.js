class CartView  {
    static rendercart(cartProducts) {
        const cartTotal=document.getElementById("cart-total");
        const cartBody=document.getElementById("cart-table-body");
        let total=0;
        cartBody.innerHTML="";
        cartProducts.forEach(product => {
            total+=(product.total);
            cartBody.innerHTML+=`<tr>
                    <td class="product">
                        <img src="${product.image}" alt="" class="product-image">
                        <span class="product-name">${product.name}</span>
                    </td>
                    <td class="price">${product.price}</td>
                    <td>
                        <input type="number" value="${product.quantity}" name="quantity" class="quantity" min="1" onchange="CartController.updateItemQuantityAndLoadCart('user1', '${product.productId}', this.value)">
                    </td>
                    <td class="subtotal">${product.total}</td>
                    <td>
                        <button onclick="CartController.removeItem('user1', '${product.productId}')">Delete</button>
                    </td>
                </tr>`
        });
        cartTotal.textContent=`$${total}`;
    }
}
document.addEventListener("DOMContentLoaded", () => {
    CartController.loadCart('user1');
});