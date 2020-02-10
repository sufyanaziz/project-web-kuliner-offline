import React from "react";
import { Link } from "react-router-dom";

const paymentEmpty = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh"
      }}
    >
      <h1 style={{ color: "grey", textTransform: "uppercase" }}>
        The Cart is Empty, <Link to="/order-online">Back to Order</Link>
      </h1>
    </div>
  );
};

export default paymentEmpty;
