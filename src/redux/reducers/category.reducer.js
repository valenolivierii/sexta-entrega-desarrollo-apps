import { CATEGORIES } from "../../../data/categories";
import { SELECT_CATEGORY } from "../actions/category.action";

const emptyState = {
    categories: CATEGORIES,
    selectedCategory: null,
}

const CategoryReducer = (state = emptyState, action) => {
    switch (action.type) {
        case SELECT_CATEGORY:
            const categoryIndex = state.categories.findIndex(cat => cat.id === action.categoryId)
            if (categoryIndex !== -1) {
                return { ...state, selectedCategory: state.categories[categoryIndex] }
            }
        default:
            return state;
    }
}

export default CategoryReducer;