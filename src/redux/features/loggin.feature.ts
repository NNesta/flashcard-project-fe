/* eslint-disable import/no-anonymous-default-export */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loggin: false,
    isLoggedIn: false,
};

export const logginSlice = createSlice({
    name: 'loggin',
    initialState,
    reducers: {
        setLoggin: (state) => {
            state.loggin = true;
        },
        removeLoggin: (state) => {
            state.loggin = false;
        },
        setIsLoggedIn: (state) => {
            state.isLoggedIn = true;
        },
        setIsLoggedOut: (state) => {
            state.isLoggedIn = false;
        }
    },
});

export const {
    setLoggin, removeLoggin, setIsLoggedIn, setIsLoggedOut
} = logginSlice.actions;

export default { logginReducer: logginSlice.reducer };
