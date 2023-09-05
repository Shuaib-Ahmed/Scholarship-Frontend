import React, { useEffect } from "react";

import { IoMdSchool } from "react-icons/io";
import {
  BsFillCloudDownloadFill,
  BsCheckCircleFill,
  BsXCircleFill,
} from "react-icons/bs";

import { Link } from "react-router-dom";

import { getApplications, updateApplication } from "../redux/applicationSlice";
import { useDispatch, useSelector } from "react-redux";

const ManageApplication = () => {
  const dispatch = useDispatch();
  const { applications } = useSelector((state) => state.application);

  useEffect(() => {
    dispatch(getApplications());
  }, []);

  const updateHandler = async (status, application_id) => {
    const { error } = await dispatch(
      updateApplication({ status, application_id })
    );

    if (!error) {
      dispatch(getApplications());
    }
  };

  return (
    <section className="container" style={{ margin: "5em auto" }}>
      <h3 className="sectionTitle">
        <IoMdSchool /> Manage applications
      </h3>

      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone No</th>
              <th>City</th>
              <th>State</th>
              <th>Academic Details</th>
              <th>ID Card</th>
              <th>Aadhar Card</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application, index) => {
              const {
                first_name,
                last_name,
                phone_no,
                state,
                city,
                academic_certificate,
                id_card,
                aadhar_card,
                scholarship_detail: { _id: scholarship_id, title },
                _id: application_id,
              } = application;
              return (
                <tr key={scholarship_id}>
                  <td>{index + 1}</td>
                  <td>
                    <Link
                      to={`/scholarship-detail/${scholarship_id}`}
                      style={{ textDecoration: "underline" }}
                    >
                      {title}
                    </Link>
                  </td>
                  <td>{first_name}</td>
                  <td>{last_name}</td>
                  <td>{phone_no}</td>
                  <td>{city}</td>
                  <td>{state}</td>
                  <td>
                    <a
                      href={academic_certificate}
                      download="academic-certificate"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BsFillCloudDownloadFill /> Download
                    </a>
                  </td>
                  <td>
                    <a
                      href={id_card}
                      download="id-card"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BsFillCloudDownloadFill /> Download
                    </a>
                  </td>
                  <td>
                    <a
                      href={aadhar_card}
                      download="aadhar"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BsFillCloudDownloadFill /> Download
                    </a>
                  </td>
                  <td>
                    <button
                      className="secondaryBtn"
                      onClick={() => updateHandler("accept", application_id)}
                    >
                      <BsCheckCircleFill /> Accept
                    </button>
                    <button
                      className="primaryBtn"
                      style={{ marginTop: "1rem" }}
                      onClick={() => updateHandler("reject", application_id)}
                    >
                      <BsXCircleFill /> Reject
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ManageApplication;
