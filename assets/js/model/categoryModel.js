const CategoryModel = {
    getAllCategories: function() {
        return JSON.parse(localStorage.getItem("categories")) || [];
    },
    addCategory: function(category) {
        const categories = this.getAllCategories();
        categories.push(category);
        localStorage.setItem("categories", JSON.stringify(categories));
    },
    updateCategory: function(categoryId, updatedCategory) {
        const categories = this.getAllCategories().map(category =>
            category.id === categoryId ? updatedCategory : category
        );
        localStorage.setItem("categories", JSON.stringify(categories));
    },
    deleteCategory: function(categoryId) {
        const categories = this.getAllCategories().filter(category => category.id !== categoryId);
        localStorage.setItem("categories", JSON.stringify(categories));
    }
};