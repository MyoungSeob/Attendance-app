import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    loginId : "",
    loginPassword : "",
    isAutoLogin : false,
}

export const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        loginId : (state, action) => {
            state.loginId = action.payload.loginId;
        },
        loginPassword : (state, action) => {
            state.loginPassword = action.payload.loginPassword;
        },
        isAutoLogin : (state, action) => {
            state.isAutoLogin = action.payload.isAutoLogin;
        }
    }
})

export const {loginId, loginPassword, isAutoLogin} = authSlice.actions;

export default authSlice.reducer;