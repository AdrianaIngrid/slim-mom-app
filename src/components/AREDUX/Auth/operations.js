import { createAsyncThunk } from "@reduxjs/toolkit";
import { userApi } from "../../API/api"; 

// *Register user
export const register = createAsyncThunk(
  "/api/signup",
  async (user, thunkApi) => {
    try {
      console.log("Sending user data:", user);
      const response = await userApi.signup(user);
      console.log("Server response:", response);
      return response.data.data;
    } catch (error) {
      console.error("Error from server:", error.response || error);
      return thunkApi.rejectWithValue(error.response?.data || error.message);
    }
  }
);

// *Login user
export const login = createAsyncThunk(
  "/api/login",
  async (user, thunkApi) => {
    try {
      console.log("Data sent to API:", user); 
      const response = await userApi.login(user);
      console.log("Response from userApi in login operation:", response);
      if (!response || !response.email || !response.token) {
        throw new Error("Invalid response from userApi.");
      }
  
      
      return response; 
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      return thunkApi.rejectWithValue(error.response?.data || error.message);
    }
  }
);

// *Logout user
export const logout = createAsyncThunk(
  "/api/logout",
  async (_, thunkApi) => {
    try {
      await userApi.logout();
      localStorage.removeItem("authToken");
      return;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// *Get current user info
export const getUserInfo = createAsyncThunk(
  "/api/current",
  async (_, thunkApi) => {
    try {
      const data = await userApi.currentUser();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);