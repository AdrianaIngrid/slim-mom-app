import { createSlice } from "@reduxjs/toolkit";
import { login, logout, register } from "../Auth/operations";

const handlePending = (state) => {
  state.isLoading = true; // Cererea este în desfășurare
  state.error = null; // Resetează eroarea
};
const handleRejected = (state, action) => {
  state.isLoading = false; // Cererea a eșuat
  state.error = action.payload; // Salvează eroarea
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {email: null,  username: null },
    token: null,
    isLoggedIn: false,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(register.pending, handlePending)
      .addCase(register.rejected, handleRejected)
      .addCase(login.fulfilled, (state, action) => {
        console.log("Reducer received payload:", action.payload); // Log payload-ul primit
      
        if (!action.payload) {
          state.isLoading = false;
          state.error = "Login failed: Invalid payload.";
          return;
        }
      
        const {email, username, token } = action.payload;
        if (!email || !username || !token) {
          state.error = "Incomplete payload received.";
          state.isLoading = false;
          return;
        } // Extragem datele
        state.user = {email, username};
        state.token = token;
        state.isLoggedIn = true;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(login.pending, handlePending)
      .addCase(login.rejected, handleRejected)
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
        state.user = { username: null, email: null};
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logout.pending, handlePending)
      .addCase(logout.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;