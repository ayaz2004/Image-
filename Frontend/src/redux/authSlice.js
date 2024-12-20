import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      const { uid, email, displayName, photoURL } = action.payload;
      state.user = { uid, email, displayName, photoURL };
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearAuthState: (state) => {
      state.user = null;
      state.error = null;
    },
  },
});

export const { setUser, setError, clearAuthState } = authSlice.actions;
export default authSlice.reducer;
