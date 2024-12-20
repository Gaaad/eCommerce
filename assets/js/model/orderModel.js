const OrderModel = {
    getAllOrders: function () {
        return JSON.parse(localStorage.getItem("orders")) || [];
    },
    addOrder: function (order) {
        const orders = this.getAllOrders();
        orders.push(order);
        localStorage.setItem("orders", JSON.stringify(orders));
    },
    updateOrder: function (orderId, updatedOrder) {
        const orders = this.getAllOrders().map(order =>
            order.id === orderId ? updatedOrder : order
        );
        localStorage.setItem("orders", JSON.stringify(orders));
    },
    deleteOrder: function (orderId) {
        const orders = this.getAllOrders().filter(order => order.id !== orderId);
        localStorage.setItem("orders", JSON.stringify(orders));
    }
};
