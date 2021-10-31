import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    loginId : "",
    loginPassword : "",
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
    }
})

export const {loginId, loginPassword} = authSlice.actions;

export default authSlice.reducer;