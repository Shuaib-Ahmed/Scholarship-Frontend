import React, { useEffect } from "react";
import styles from "./styles/scholarships.module.css";

import ScholarshipFilter from "./ScholarshipFilter";

import { IoMdSchool } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import { getScholarships, setLimit } from "../redux/scholarshipSlice";
import { useDispatch, useSelector } from "react-redux";

const ScholarshipSection = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { scholarships, filter, limit } = useSelector((state) => state.scholarship);

  useEffect(() => {
    dispatch(getScholarships());
  }, [filter, limit]);

  return (
    <section className={styles.scholarshipSection} id="scholarships">
      <h2 className="sectionTitle">
        <IoMdSchool /> Scholarships
      </h2>
      <div className={`container`}>
        <ScholarshipFilter />
        <div className={styles.scholarshipsContainer}>
          {scholarships.map(({ title, amount, deadline, course, _id }) => {
            const date = new Date(deadline).toLocaleDateString("en-US");
            return (
              <div
                className={styles.scholarship}
                key={_id}
                onClick={() => navigate(`/scholarship-detail/${_id}`)}
              >
                <h4>{title}</h4>
                <div>
                  <div>
                    <span>Amount </span>
                    <span>Rs.{amount}</span>
                  </div>
                  <div>
                    <span>Deadline </span>
                    <span>{date}</span>
                  </div>
                  <div>
                    <span>Course </span>
                    <span>{course}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <button className="primaryBtn" onClick={() => dispatch(setLimit())}>
          Show More
        </button>
      </div>
    </section>
  );
};

export default ScholarshipSection;
