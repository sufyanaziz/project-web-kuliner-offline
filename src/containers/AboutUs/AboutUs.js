import React, { useEffect } from "react";

import styled from "styled-components";
import Header from "../../components/ui/Header/Header";
import classes from "./AboutUs.module.css";

import Footer from "../../components/ui/Footer/Footer";

const AboutUs = React.memo(props => {
  useEffect(() => {
    document.title = "About Us";
  });
  return (
    <React.Fragment>
      <Header headerType="About">
        <ContainerHeader>
          <h1 style={{ fontSize: "4rem" }}>All About Food</h1>
        </ContainerHeader>
      </Header>
      <Footer />
    </React.Fragment>
  );
});

const ContainerHeader = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

export default AboutUs;
