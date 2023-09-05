import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { BaseUrl, errorNotification, successNotification } from "../utlis";

const initialState = {
  login: localStorage.getItem("auth_detail") ? true : false,
  isAdmin: localStorage.getItem("auth_detail")
    ? JSON.parse(localStorage.getItem("auth_detail")).isAdmin
    : false,
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (formData, { rejectWithValue }) => {
    try {
      const url = `${BaseUrl}/auth/register`;
      const { data } = await axios.post(url, formData);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (formData, { rejectWithValue }) => {
    try {
      const url = `${BaseUrl}/auth/login`;
      const { data } = await axios.post(url, formData);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.isAdmin = false;
      state.login = false;
      localStorage.removeItem("auth_detail");
    },
    setAuthDetail: (state, action) => {
      const { token, isAdmin } = action.payload;
      if (token) {
        state.login = true;
        state.isAdmin = isAdmin;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.rejected, (state, action) => {
      const errorMessage = action.payload.message;
      errorMessage.split(",").forEach((message) => {
        errorNotification(message);
      });
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      localStorage.setItem("auth_detail", JSON.stringify(action.payload));
      state.login = true;
      state.isAdmin = action.payload.isAdmin;
      successNotification("successfully registered");
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      const errorMessage = action.payload.message;
      errorMessage.split(",").forEach((message) => {
        errorNotification(message);
      });
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      localStorage.setItem("auth_detail", JSON.stringify(action.payload));
      state.login = true;
      state.isAdmin = action.payload.isAdmin;
      successNotification("successfully login");
    });
  },
});

export default authSlice.reducer;

export const { logoutUser, setAuthDetail } = authSlice.actions;
