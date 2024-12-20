const AdminView = {
    renderCategoryDropdown: function(categories) {
        const categoryDropdown = document.getElementById("product-category");
        categoryDropdown.innerHTML = `
            <option value="" disabled selected>Select a category</option>
        `;

        categories.forEach(category => {
            const option = document.createElement("option");
            option.value = category.name;
            option.textContent = category.name;
            categoryDropdown.appendChild(option);
        });
    },
    renderCategoryList: function(categories) {
        const categoryList = document.getElementById("category-list");
        categoryList.innerHTML = "";

        categories.forEach(category => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${category.id}</td>
                <td>${category.name}</td>
                <td>
                    <button onclick="CategoryController.editCategory('${category.id}')">Edit</button>
                    <button onclick="CategoryController.deleteCategory('${category.id}')">Delete</button>
                </td>
            `;
            categoryList.appendChild(row);
        });
    },
    renderProductList: function(products) {
        const productList = document.getElementById("product-list");
        productList.innerHTML = products.map(product => `
            <tr>
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.category}</td>
                <td>${product.price}</td>
                <td>${product.stock}</td>
                <td>
                    <button onclick="ProductController.editProduct('${product.id}')">Edit</button>
                    <button onclick="ProductController.deleteProduct('${product.id}')">Delete</button>
                </td>
            </tr>
        `).join('');
    },
    resetForm: function() {
        document.getElementById("product-form").reset();
        document.getElementById("product-id").value = "";
    },
    fillForm: function(product) {
        document.getElementById("product-id").value = product.id;
        document.getElementById("product-name").value = product.name;
        document.getElementById("product-image").value = product.image;
        document.getElementById("product-category").value = product.category;
        document.getElementById("product-price").value = product.price;
        document.getElementById("product-description").value = product.description;
        document.getElementById("product-stock").value = product.stock;
    },

    renderOrderList: function (orders) {
        const orderList = document.getElementById("order-list");
        orderList.innerHTML = orders.map(order => `
            <tr>
                <td>${order.id}</td>
                <td>${order.customerId}</td>
                <td>${order.customerName}</td>
                <td>${order.products.map(p => `<span>${p.name} (${p.quantity})</span>`).join(", ")}</td>
                <td>${order.total.toFixed(2)}</td>
                <td>${order.status}</td>
                <td>${order.date}</td>
                <td>
                    <select onchange="OrderController.updateOrderStatus('${order.id}', this.value)">
                        <option value="Pending" ${order.status === "Pending" ? "selected" : ""}>Pending</option>
                        <option value="Shipped" ${order.status === "Shipped" ? "selected" : ""}>Shipped</option>
                        <option value="Delivered" ${order.status === "Delivered" ? "selected" : ""}>Delivered</option>
                    </select>
                    <button onclick="OrderController.deleteOrder('${order.id}')">Delete</button>
                </td>
            </tr>
        `).join('');
    }
};

document.addEventListener("DOMContentLoaded", () => {
    AdminView.renderCategoryList(CategoryModel.getAllCategories());
    AdminView.renderOrderList(OrderModel.getAllOrders());
    AdminView.renderProductList(ProductModel.getAllProducts());
});