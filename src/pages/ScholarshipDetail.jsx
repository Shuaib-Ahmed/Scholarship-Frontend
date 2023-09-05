import React, { Fragment } from "react";

import {
  ScholarshipDetailsSection,
  ScholarshipFormSection,
} from "../components";

import { useParams } from "react-router-dom";

const ScholarshipDetail = () => {
  const { id } = useParams();
  return (
    <Fragment>
      <ScholarshipDetailsSection id={id}/>
      <ScholarshipFormSection id={id}/>
    </Fragment>
  );
};

export default ScholarshipDetail;
