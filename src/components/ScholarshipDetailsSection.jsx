import React, { useEffect } from "react";
import styles from "./styles/scholarshipDetail.module.css";

import { BiSolidDetail, BiRupee } from "react-icons/bi";
import { MdAccountBalance } from "react-icons/md";
import { ImHourGlass } from "react-icons/im";
import { IoDocumentTextOutline } from "react-icons/io5";

import { getScholarship } from "../redux/scholarshipSlice";
import { useDispatch, useSelector } from "react-redux";

const ScholarshipDetailsSection = ({ id }) => {
  const dispatch = useDispatch();
  const { scholarship_detail } = useSelector((state) => state.scholarship);

  useEffect(() => {
    dispatch(getScholarship(id));
  }, [id]);

  return (
    <section className={`container ${styles.detailContainer}`}>
      <div className={styles.left}>
        <h3 className="sectionTitle">
          <BiSolidDetail /> Scholarship details
        </h3>
        <h4>{scholarship_detail.title}</h4>
        <p>{scholarship_detail.description}</p>
        <h5>
          <BiRupee /> Amount : {scholarship_detail.amount}
        </h5>
        <h5>
          <MdAccountBalance /> Course : {scholarship_detail.course}
        </h5>
        <h5>
          <ImHourGlass /> Deadline : 
          {new Date(scholarship_detail.deadline).toLocaleDateString("en-US")}
        </h5>
        <h5>
          <IoDocumentTextOutline /> Required Documents : Academic certificates,
          ID Card, Aadhar Card
        </h5>
      </div>
      <div className={styles.right}>
        <img src="/image/scholarship.jpeg" alt="hero" />
        <div></div>
      </div>
    </section>
  );
};

export default ScholarshipDetailsSection;
