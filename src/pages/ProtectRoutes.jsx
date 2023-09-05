import React from "react";

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { errorNotification } from "../utlis";

const ProtectRoutes = ({ children, adminRoute }) => {
  const { login, isAdmin } = useSelector((state) => state.auth);

  if (!login) {
    errorNotification("Please login to access this page");
    return <Navigate to="/log-in" />;
  }

  if (login && !isAdmin && adminRoute) {
    errorNotification("You cannot acces this page");
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default ProtectRoutes;
