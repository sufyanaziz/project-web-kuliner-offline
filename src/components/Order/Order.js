import React from "react";

import { MenuConsumer } from "../../store/context";
import classes from "./Order.module.css";
import styled from "styled-components";

const Order = React.memo(props => {
  const { id, img, nama, harga, info, inCart } = props.menu;
  const { convertRupiah } = props.value;

  return (
    <React.Fragment>
      <MenuConsumer>
        {value =>
          inCart ? (
            <ProductWrapper>
              <div
                className="card mb-2"
                style={{
                  border: "transparent",
                  background: "transparent",
                  height: "auto"
                }}
              >
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src={img} className="card-img img-fluid" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body p-0 ml-4 mr-2">
                      <div
                        className="d-flex justify-content-between"
                        style={{ color: "#b1aeae" }}
                      >
                        <h5 className="card-title" style={{ fontSize: "1rem" }}>
                          {nama}
                        </h5>
                        <p className="card-text" style={{ fontSize: ".9rem" }}>
                          Rp. <strong>{convertRupiah(harga)}</strong>
                        </p>
                      </div>
                      <p className="card-text" style={{ textAlign: "left" }}>
                        <small style={{ color: "#b1aeae" }}>{info}</small>
                      </p>
                    </div>
                  </div>
                  <button className="btn-cancel text-capitalize">In Your Order <i className="fas fa-fire ml-1"></i></button>
                </div>
              </div>
            </ProductWrapper>
          ) : (
            <ProductWrapper
              onClick={() => {
                value.openModal(id);
              }}
            >
              <div
                className="card mb-2"
                style={{
                  border: "transparent",
                  background: "transparent",
                  height: "auto"
                }}
              >
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src={img} className="card-img img-fluid" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body p-0 ml-4 mr-2">
                      <div
                        className="d-flex justify-content-between"
                        style={{ color: "#b1aeae" }}
                      >
                        <h5 className="card-title" style={{ fontSize: "1rem" }}>
                          {nama}
                        </h5>
                        <p className="card-text" style={{ fontSize: ".9rem" }}>
                          Rp. <strong>{convertRupiah(harga)}</strong>
                        </p>
                      </div>
                      <p className="card-text" style={{ textAlign: "left" }}>
                        <small style={{ color: "#b1aeae" }}>{info}</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ProductWrapper>
          )
        }
      </MenuConsumer>
    </React.Fragment>
  );
});

const ProductWrapper = styled.div`
  padding: 1rem;
  border-bottom: 1px solid rgb(241, 239, 239);
  overflow: hidden;
  &:hover {
    background: rgb(241, 239, 239);
    cursor: pointer;
    .btn-cancel {
      transform: translate(0, 0);
    }
  }
  .order-container {
    position: relative;
  }
  .btn-cancel {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(150%, 0);
    transition: 1s linear;
  }
`;
export default Order;
