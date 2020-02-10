import React from "react";

export default function CartJumlah({value}) {
    const jumlah = value.cart.length;
  return (
    <div className="">
      <div
        className="d-flex justify-content-between m-0"
        style={{ borderBottom: "1px solid #b1aeae", color: "#b1aeae" }}
      >
        <p>My Order</p>
        <p>({jumlah} items)</p>
      </div>
    </div>
  );
}
