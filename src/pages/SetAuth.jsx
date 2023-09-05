import React, { useEffect } from "react";

import { setAuthDetail } from "../redux/authSlice";
import { useDispatch } from "react-redux";

const SetAuth = ({ children }) => {
  const authDetail = localStorage.getItem("auth_detail");
  const dispatch = useDispatch();

  useEffect(() => {
    if (authDetail) {
      const { token, isAdmin } = JSON.parse(authDetail);
      dispatch(setAuthDetail({ token, isAdmin }));
    }
  }, []);

  return <>{children}</>;
};

export default SetAuth;
