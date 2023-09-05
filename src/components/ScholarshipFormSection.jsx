import React from "react";

import { AiOutlineForm, AiOutlineSend } from "react-icons/ai";

import { useNavigate } from "react-router-dom";

import { getFormData, errorNotification } from "../utlis";
import { useDispatch, useSelector } from "react-redux";
import { createApplication } from "../redux/applicationSlice";

const ScholarshipFormSection = ({ id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { login } = useSelector((state) => state.auth);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!login) {
      errorNotification("Please login to apply");
      return;
    }

    const { data } = getFormData(e.currentTarget);
    const { error } = await dispatch(
      createApplication({ ...data, scholarship_detail: id })
    );

    if (!error) {
      navigate("/profile");
    }
  };

  return (
    <section className="container">
      <h3 className="sectionTitle">
        <AiOutlineForm /> Fill the form below
      </h3>
      <form className="formContainer" onSubmit={submitHandler}>
        <div>
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            name="first_name"
            id="first_name"
            placeholder="Please enter your first name"
            required
          />
        </div>
        <div>
          <label htmlFor="last_name">Last Name</label>
          <input
            type="text"
            name="last_name"
            id="last_name"
            placeholder="Please enter your last name"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Please enter your email"
            required
          />
        </div>
        <div>
          <label htmlFor="phone_no">Phone No</label>
          <input
            type="tel"
            name="phone_no"
            id="phone_no"
            placeholder="Please enter your phone number"
            required
          />
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            id="city"
            placeholder="Please enter your city"
            required
          />
        </div>
        <div>
          <label htmlFor="state">State</label>
          <input
            type="text"
            name="state"
            id="state"
            placeholder="Please enter your state"
            required
          />
        </div>
        <div>
          <label htmlFor="academic_certificate">Academic Certificates</label>
          <input
            type="file"
            name="academic_certificate"
            id="academic_certificate"
            required
          />
        </div>
        <div>
          <label htmlFor="id_card">ID Card</label>
          <input type="file" name="id_card" id="id_card" required />
        </div>
        <div>
          <label htmlFor="aadhar_card">Aadhar Card</label>
          <input type="file" name="aadhar_card" id="aadhar_card" required />
        </div>
        <button type="submit" className="primaryBtn">
          <AiOutlineSend /> Apply
        </button>
      </form>
    </section>
  );
};

export default ScholarshipFormSection;
