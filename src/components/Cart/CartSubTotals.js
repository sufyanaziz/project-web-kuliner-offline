import React from "react";
import { Link } from "react-router-dom";

export default function CartSubTotals({ value }) {
  const { cartSubTotals, convertRupiah } = value;
  return (
    <div>
      <div className="pt-3" style={{ borderTop: "1px solid #F25B04" }}>
        <div
          className="d-flex justify-content-between text-capitalize"
          style={{ color: "#F25B04" }}
        >
          <p>subtotal</p>
          <p>Rp. {convertRupiah(cartSubTotals)}</p>
        </div>
      </div>
      <div className="py-2">
        <Link to="/checkout">
          <span className="btn btn-order w-100">
            Order Now <i className="fas fa-arrow-right"></i>
          </span>
        </Link>
      </div>
    </div>
  );
}
