import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import scholarshipReducer from "./scholarshipSlice";
import applicationReducer from "./applicationSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    scholarship: scholarshipReducer,
    application: applicationReducer
  },
});
