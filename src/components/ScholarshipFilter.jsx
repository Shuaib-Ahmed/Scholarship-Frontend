import React from "react";
import styles from "./styles/filters.module.css";

import { AiTwotoneFilter } from "react-icons/ai";

import { setFilter } from "../redux/scholarshipSlice";
import { useDispatch } from "react-redux";

import { getFormData } from "../utlis";

const ScholarshipFilter = () => {
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    const { data } = getFormData(e.currentTarget);
    dispatch(setFilter(data));
  };

  return (
    <div className={styles.filterContainer}>
      <h3>
        <AiTwotoneFilter /> Filter
      </h3>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="course">course</label>
          <select name="course" id="course">
            <option value="">select course</option>
            <option value="graduation">graduation</option>
            <option value="post graduation">post graduation</option>
            <option value="phd">phd</option>
          </select>
        </div>
        <div>
          <label htmlFor="deadline">deadline</label>
          <input type="date" name="deadline" id="deadline" />
        </div>
        <button type="submit" className="primaryBtn">
          Apply
        </button>
      </form>
    </div>
  );
};

export default ScholarshipFilter;
