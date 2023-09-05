import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  Home,
  ScholarshipDetail,
  Profile,
  LogIn,
  SignUp,
  CreateScholarship,
  ManageApplication,
  ProtectRoutes,
  SetAuth,
} from "./pages";
import Layout from "./components/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <SetAuth>
                <Home />
              </SetAuth>
            }
          />
          <Route
            path="/scholarship-detail/:id"
            element={
              <SetAuth>
                <ScholarshipDetail />
              </SetAuth>
            }
          />
          <Route
            path="/profile"
            element={
              <SetAuth>
                <ProtectRoutes adminRoute={false}>
                  <Profile />
                </ProtectRoutes>
              </SetAuth>
            }
          />
          <Route
            path="/create-scholarship"
            element={
              <SetAuth>
                <ProtectRoutes adminRoute={true}>
                  <CreateScholarship />
                </ProtectRoutes>
              </SetAuth>
            }
          />
          <Route
            path="/manage-application"
            element={
              <SetAuth>
                <ProtectRoutes adminRoute={true}>
                  <ManageApplication />
                </ProtectRoutes>
              </SetAuth>
            }
          />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/log-in" element={<LogIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
