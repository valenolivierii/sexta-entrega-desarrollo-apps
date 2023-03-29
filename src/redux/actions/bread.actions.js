export const BREAD_SELECTED = 'BREAD_SELECTED';
export const FILTERED_BREADS = 'FILTERED_BREADS'

export const breadSelected = id => ({
    type: BREAD_SELECTED,
    breadId: id
})

export const filteredBreads = id => ({
    type: FILTERED_BREADS,
    categoryId: id
})
