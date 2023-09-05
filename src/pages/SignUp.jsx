import React from "react";

import { IoMdSchool } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { registerUser } from "../redux/authSlice";
import { getFormData } from "../utlis";

const SignUp = () => {
  const dispatch = useDispatch();
  const { login, isAdmin } = useSelector((state) => state.auth);

  const submitHandler = (e) => {
    e.preventDefault();
    const { data } = getFormData(e.currentTarget);
    dispatch(registerUser(data));
  };

  if (login && !isAdmin) {
    return <Navigate to="/" />;
  }

  if (login && isAdmin) {
    return <Navigate to="/create-scholarship" />;
  }

  return (
    <section className="container" style={{ margin: "5rem auto" }}>
      <h3 className="sectionTitle">
        <IoMdSchool /> Sign Up
      </h3>
      <form className="formContainer" onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Please enter your email"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Please enter your password"
          />
        </div>
        <div>
          <label htmlFor="conform_password">Conform Password</label>
          <input
            type="password"
            name="conform_password"
            id="conform_password"
            placeholder="Please re-enter your password"
          />
        </div>

        <button type="submit" className="primaryBtn">
          Sign Up
        </button>
      </form>
    </section>
  );
};

export default SignUp;
