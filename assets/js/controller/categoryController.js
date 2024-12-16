const CategoryController = {
    loadCategories: function() {
        const categories = CategoryModel.getAllCategories();
        AdminView.renderCategoryList(categories);
    },
    handleFormSubmit: function(event) {
        event.preventDefault();

        const categoryId = document.getElementById("category-id").value;
        const category = {
            id: categoryId || Date.now().toString(),
            name: document.getElementById("category-name").value
        };

        if (categoryId) {
            CategoryModel.updateCategory(categoryId, category);
        } else {
            CategoryModel.addCategory(category);
        }

        CategoryController.loadCategories();
        AdminView.resetCategoryForm();
    },
    deleteCategory: function(categoryId) {
        if (confirm("Are you sure you want to delete this category?")) {
            CategoryModel.deleteCategory(categoryId);
            CategoryController.loadCategories();
        }
    },
    editCategory: function(categoryId) {
        const categories = CategoryModel.getAllCategories();
        const category = categories.find(c => c.id === categoryId);
        AdminView.fillCategoryForm(category);
    }
};

document.getElementById("category-form").addEventListener("submit", CategoryController.handleFormSubmit);
