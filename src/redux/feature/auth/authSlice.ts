import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

 export type Tuser = {
    userId: string;
    role: string;
    iat: number;
    exp: number;
}

type TAuthState = {
    user: null | object,
    token: null | string,
}

const initialState: TAuthState = {
    user: null,
    token: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state: TAuthState, action) => {
            const { user, token } = action.payload;
            state.user = user;
            state.token = token;
        },

        logout: (state: TAuthState) => {
            state.user = null;
            state.token = null;
        }
    }
})

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;


//for protectedFile

export const useCurrentToken = (state: RootState) => state.auth.token;
export const selectCurrentUser = (state: RootState) => state.auth.user;
