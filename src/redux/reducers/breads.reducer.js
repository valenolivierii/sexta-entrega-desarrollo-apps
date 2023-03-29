import { BREADS } from "../../../data/breads";
import { BREAD_SELECTED, FILTERED_BREADS } from "../actions/bread.actions";

const emptyState = {
    breads: BREADS,
    filteredBreads: [],
    selectedBread: null,
}

const BreadsReducer = (state = emptyState, action) => {
    switch (action.type) {
        case BREAD_SELECTED:
            const breadSelected = state.breads.find(bread => bread.id === action.breadId)
            return { ...state, selectedBread: breadSelected }
        case FILTERED_BREADS:
            const filter = state.breads.filter(bread => bread.category === action.categoryId)
            return { ...state, filteredBreads: filter }
        default:
            return state;
    }
}

export default BreadsReducer;