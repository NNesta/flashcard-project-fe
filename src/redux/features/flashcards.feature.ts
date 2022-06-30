/* eslint-disable import/no-anonymous-default-export */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    createFlashcard: false,
};

export const flashcardSlice = createSlice({
    name: 'flashcard',
    initialState,
    reducers: {
        setCreateFlashcard: (state) => {
            state.createFlashcard = true;
        },
        removeCreateFlashcard: (state) => {
            state.createFlashcard = false;
        },
    },
});

export const {
    setCreateFlashcard, removeCreateFlashcard
} = flashcardSlice.actions;

export default { flashcardReducer: flashcardSlice.reducer };