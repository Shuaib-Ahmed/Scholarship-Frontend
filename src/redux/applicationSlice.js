import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { BaseUrl, errorNotification, successNotification } from "../utlis";

const initialState = {
  applications: [],
};

export const createApplication = createAsyncThunk(
  "application/createApplication",
  async (formData, { rejectWithValue }) => {
    try {
      const { token } = JSON.parse(localStorage.getItem("auth_detail"));
      const url = `${BaseUrl}/application`;

      await axios.post(url, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getApplications = createAsyncThunk(
  "application/getApplications",
  async (data, { rejectWithValue }) => {
    try {
      const { token } = JSON.parse(localStorage.getItem("auth_detail"));
      const url = `${BaseUrl}/application`;

      const { data } = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateApplication = createAsyncThunk(
  "application/updateApplication",
  async ({ status, application_id }, { rejectWithValue }) => {
    try {
      const { token } = JSON.parse(localStorage.getItem("auth_detail"));
      const url = `${BaseUrl}/application/${application_id}`;

      const { data } = await axios.patch(
        url,
        { status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteApplication = createAsyncThunk(
  "application/deleteApplication",
  async (application_id, { rejectWithValue }) => {
    try {
      const { token } = JSON.parse(localStorage.getItem("auth_detail"));
      const url = `${BaseUrl}/application/${application_id}`;

      const { data } = await axios.delete(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createApplication.rejected, (state, action) => {
      const errorMessage = action.payload.message;
      if (errorMessage) {
        errorMessage.split(",").forEach((message) => {
          errorNotification(message);
        });
      }
    });
    builder.addCase(createApplication.fulfilled, (state, action) => {
      successNotification("successfully created");
    });
    builder.addCase(getApplications.rejected, (state, action) => {
      errorNotification(action.payload.message);
    });
    builder.addCase(getApplications.fulfilled, (state, action) => {
      state.applications = action.payload;
    });
    builder.addCase(updateApplication.rejected, (state, action) => {
      errorNotification(action.payload.message);
    });
    builder.addCase(deleteApplication.rejected, (state, action) => {
      errorNotification(action.payload.message);
    });
  },
});

export default applicationSlice.reducer;
