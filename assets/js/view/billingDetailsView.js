const placeOrderBtn=document.querySelector('.place-order-btn');

const cart=CartModel.getCartWithDetails('user1');
const total = cart.reduce((sum, item) => sum + item.total, 0);
const cartTotal=document.getElementById("cart-total");

document.addEventListener("DOMContentLoaded", () => {
    cartTotal.textContent=`$${total}`;
});

placeOrderBtn.addEventListener("click",()=>{
    const Name=document.getElementById('name').value;
    const email=document.getElementById('email').value;
    const phone=document.getElementById('phone-number').value;
    const address=document.getElementById('street-address').value;
    if (!cart || cart.length === 0) {
        alert("Your cart is empty. Add some products before placing an order.");
        return;
    }
    
    const order = {
        id: Date.now().toString(),
        customerId: 'user1', 
        customerName: Name, 
        contact: {
            email,
            phone,
            address
        },
        products: cart.map(item => ({
            id: item.productId,
            name: item.name,
            price: item.price,
            quantity: item.quantity
        })),
        total,
        status: "Pending",
        date: new Date().toLocaleString()
    };

   
    OrderModel.addOrder(order);

    
    CartModel.clearCart('user1'); 

   
    alert("Order placed successfully!");

    
    window.location.href = './home.html';
})
