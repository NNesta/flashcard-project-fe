/* eslint-disable import/no-anonymous-default-export */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    register: false,
};

export const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        setRegister: (state) => {
            state.register = true;
        },
        removeRegister: (state) => {
            state.register = false;
        },
    },
});

export const {
    setRegister, removeRegister
} = registerSlice.actions;

export default { registerReducer: registerSlice.reducer };
