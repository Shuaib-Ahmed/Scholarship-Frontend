import React from "react";

import { IoCreateOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";

import { createScholarship } from "../redux/scholarshipSlice";
import { getFormData } from "../utlis";

const CreateScholarship = () => {
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();

    const { data } = getFormData(e.currentTarget);
    const { error } = await dispatch(createScholarship(data));

    if (!error) {
      e.target.reset();
    }
  };

  return (
    <section className="container" style={{ margin: "5rem auto" }}>
      <h3 className="sectionTitle">
        <IoCreateOutline /> Create new scholarship
      </h3>
      <form className="formContainer" onSubmit={submitHandler}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Please enter the title"
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            placeholder="Please enter the description"
          ></textarea>
        </div>
        <div>
          <label htmlFor="course">Eligible Course</label>
          <select name="course" id="course">
            <option value="">Please select course</option>
            <option value="graduation">graduation</option>
            <option value="post graduation">post graduation</option>
            <option value="phd">phd</option>
          </select>
        </div>
        <div>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            name="amount"
            id="amount"
            placeholder="Please enter scholarship amount"
          />
        </div>
        <div>
          <label htmlFor="deadline">Deadline</label>
          <input type="date" name="deadline" id="deadline" />
        </div>
        <button type="submit" className="primaryBtn">
          Create
        </button>
      </form>
    </section>
  );
};

export default CreateScholarship;
