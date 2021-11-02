import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    signUpId : "",
    signUpPassword : "",
    signUpName : ""
}

const signSlice = createSlice({
    name : "sign",
    initialState,
    reducers : {
        signUpId : (state, action) => {
            state.signUpId = action.payload.signUpId;
        },
        signUpPassword : (state, action) => {
            state.signUpPassword = action.payload.signUpPassword;
        },
        signUpName : (state, action) => {
            state.signUpName = action.payload.signUpName;
        }
    }
});

export const {signUpId, signUpPassword, signUpName} = signSlice.actions;
export default signSlice.reducer;