import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { BaseUrl, errorNotification, successNotification } from "../utlis";

const initialState = {
  scholarships: [],
  filter: {},
  limit: 10,
  scholarship_detail: {},
};

export const createScholarship = createAsyncThunk(
  "scholarship/createScholarship",
  async (formData, { rejectWithValue }) => {
    try {
      const url = `${BaseUrl}/scholarship`;
      const { token } = JSON.parse(localStorage.getItem("auth_detail"));
      const { data } = await axios.post(url, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getScholarships = createAsyncThunk(
  "scholarship/getScholarships",
  async (data, { rejectWithValue, getState }) => {
    try {
      const {
        scholarship: { filter, limit },
      } = getState();
      let url = `${BaseUrl}/scholarship?limit=${limit}`;

      if (filter.course) {
        url += `&course=${filter.course}`;
      }

      if (filter.deadline) {
        url += `&deadline=${filter.deadline}`
      }

      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const getScholarship = createAsyncThunk(
  "scholarship/getScholarship",
  async (id, { rejectWithValue }) => {
    try {
      const url = `${BaseUrl}/scholarship/${id}`;
      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const scholarshipSlice = createSlice({
  name: "scholarship",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setLimit: (state, action) => {
      state.limit = state.limit + 10;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createScholarship.rejected, (state, action) => {
      const errorMessage = action.payload.message;
      if (errorMessage) {
        errorMessage.split(",").forEach((message) => {
          errorNotification(message);
        });
      }
    });
    builder.addCase(createScholarship.fulfilled, (state, action) => {
      successNotification("successfully created");
    });
    builder.addCase(getScholarships.rejected, (state, action) => {
      errorNotification(action.payload.message);
    });
    builder.addCase(getScholarships.fulfilled, (state, action) => {
      state.scholarships = action.payload;
    });
    builder.addCase(getScholarship.rejected, (state, action) => {
      errorNotification(action.payload.message);
    });
    builder.addCase(getScholarship.fulfilled, (state, action) => {
      state.scholarship_detail = action.payload;
    });
  },
});

export default scholarshipSlice.reducer;

export const { setFilter, setLimit } = scholarshipSlice.actions;
