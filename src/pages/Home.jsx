import React, { Fragment } from "react";

import { HeroSection, ScholarshipSection, ContactSection } from "../components";

const Home = () => {
  return (
    <Fragment>
      <HeroSection />
      <ScholarshipSection />
      <ContactSection />
    </Fragment>
  );
};

export default Home;
