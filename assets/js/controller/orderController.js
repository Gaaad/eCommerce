const OrderController = {
    loadOrders: function () {
        const orders = OrderModel.getAllOrders();
        AdminView.renderOrderList(orders);
    },
    
    deleteOrder: function (orderId) {
        if (confirm("Are you sure you want to delete this order?")) {
            OrderModel.deleteOrder(orderId);
            OrderController.loadOrders();
        }
    },
    updateOrderStatus: function (orderId, status) {
        const orders = OrderModel.getAllOrders();
        const order = orders.find(o => o.id === orderId);
        if (order) {
            order.status = status;
            OrderModel.updateOrder(orderId, order);
            OrderController.loadOrders();
        } else {
            alert("Order not found.");
        }
    }
};
