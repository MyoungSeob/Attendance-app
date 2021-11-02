import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/auth';
import signReducer from './auth/sign'
export const store = configureStore({
    reducer : {
        auth : authReducer,
        sign : signReducer
    },
})