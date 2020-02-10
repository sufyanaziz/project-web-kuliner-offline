import React from "react";

import Swal from "sweetalert2";

export default function EmptyCart() {
  const buttonHandlerGagal = () => {
    Swal.fire({
      icon: "error",
      title: "Akses Di tolak",
      text: "Kamu Belum Memasukan Apapun",
      showClass: {
        popup: "animated fadeInDown faster"
      },
      hideClass: {
        popup: "animated fadeOutUp faster"
      }
    });
  };

  return (
    <div className="">
      <div
        className="d-flex justify-content-between m-0"
        style={{ borderBottom: "1px solid #b1aeae", color: "#b1aeae" }}
      >
        <p>My Order</p>
        <p>(0 items)</p>
      </div>
      <div
        className="container text-center pt-4 px-4 pb-2"
        style={{ color: "#b1aeae", textTransform: "capitalize" }}
      >
        <div style={{ fontSize: "2.5rem" }}>
          <i className="fas fa-shopping-bag"></i>
        </div>
        <p>Browse our menu and start adding items to your order</p>
      </div>
      <div className="pt-3" style={{ borderTop: "1px solid #F25B04" }}>
        <div
          className="d-flex justify-content-between text-capitalize"
          style={{ color: "#F25B04" }}
        >
          <p>subtotal</p>
          <p>Rp. 0</p>
        </div>
      </div>
      <div className="py-2">
        <span
          className="btn btn-order w-100 text-capitalize"
          onClick={() => buttonHandlerGagal()}
        >
          Order Now <i className="fas fa-arrow-right"></i>
        </span>
      </div>
    </div>
  );
}
