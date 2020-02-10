import React from "react";
import styled from "styled-components";
import gambar from "./logo.svg";

import { Link } from "react-router-dom";
import classes from "./Logo.module.css";

const logo = () => (
  <React.Fragment>
    <div className={classes.Logo}>
      <Link to="/">
        <Logo>
          <img src={gambar} alt="logo" />
          <Text>Foodie</Text>
        </Logo>
      </Link>
    </div>
  </React.Fragment>
);

const Logo = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin: auto;
`;
const Text = styled.h1`
  font-family: "Courgette", cursive;
  margin-left: 10px;
  font-size: 1.6rem;
  color: #3b7339;
`;

export default logo;
