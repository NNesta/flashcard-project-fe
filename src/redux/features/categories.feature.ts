/* eslint-disable import/no-anonymous-default-export */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    createCategory: false,
};

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setCreateCategory: (state) => {
            state.createCategory = true;
        },
        removeCreateCategory: (state) => {
            state.createCategory = false;
        },
    },
});

export const {
    setCreateCategory, removeCreateCategory
} = categorySlice.actions;

export default { categoryReducer: categorySlice.reducer };
