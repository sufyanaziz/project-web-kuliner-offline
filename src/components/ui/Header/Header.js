import React from "react";
import classes from "./Header.module.css";

const header = props => (
  <div className={[classes.Header, classes[props.headerType]].join(" ")}>
    <div className={classes.Container}>{props.children}</div>
  </div>
);

export default header;
