import React from "react";

import Header from "../../components/ui/Header/Header";
import classes from "./AboutUs.module.css";

import Footer from "../../components/ui/Footer/Footer";

const AboutUs = React.memo(props => {
  return (
    <React.Fragment>
      <Header headerType="About"></Header>
      <Footer />
    </React.Fragment>
  );
});

export default AboutUs;
