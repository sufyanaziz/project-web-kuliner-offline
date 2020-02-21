import React, { useEffect } from "react";
import { MenuConsumer } from "../../store/context";
import PaymentEmpty from "../../components/Payment/PaymentEmpty";
import Payment from "../../components/Payment/Payment";
import styled from "styled-components";
import ContactData from "./ContactData/ContactData";
import Footer from "../../components/ui/Footer/Footer";

import classes from "./Checkout.module.css";

const Checkout = React.memo(props => {
  useEffect(() => {
    document.title = "Checkout";
  });
  return (
    <React.Fragment>
      <MenuConsumer>
        {value => {
          if (value.cart.length > 0) {
            return (
              <Wrapper>
                <div className="container">
                  <div
                    className="card"
                    style={{ height: "auto", marginBottom: "20px" }}
                  >
                    <div className={classes.Dekorasi} />
                    <div className="row p-5">
                      <div
                        className="col-md-5 p-0"
                        style={{ border: "1px solid #b1aeae" }}
                      >
                        <div
                          style={{
                            padding: "20px",
                            height: "50px"
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              height: "100%"
                            }}
                          >
                            <div
                              onClick={() => props.history.goBack()}
                              style={{ cursor: "pointer" }}
                            >
                              <span
                                style={{
                                  marginRight: "1rem",
                                  color: "#F25B04"
                                }}
                              >
                                <i className="fas fa-chevron-left"></i>
                              </span>
                            </div>
                            <span
                              style={{
                                textTransform: "capitalize",
                                color: "#b1aeae"
                              }}
                            >
                              my order
                            </span>
                            <span
                              style={{ marginLeft: "auto", color: "#b1aeae" }}
                            >
                              ({value.cart.length} items)
                            </span>
                          </div>
                        </div>
                        <div
                          style={{
                            borderTop: "1px solid #b1aeae"
                          }}
                        >
                          <Payment value={value} />
                        </div>
                      </div>

                      <div className="col-md-7">
                        <div className={classes.Contact}>
                          <div
                            style={{
                              padding: "0 10px",
                              height: "50px"
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                height: "100%",
                                justifyContent: "left"
                              }}
                            >
                              <div style={{ color: "#F25B04" }}>
                                <span>Contact For Orders</span>
                              </div>
                            </div>
                          </div>
                          <div
                            style={{
                              borderTop: "1px solid grey",
                              padding: "30px 10px"
                            }}
                          >
                            <ContactData
                              value={value}
                              cart={value.cart}
                              link={props}
                            />
                            {/* <Test /> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Footer />
              </Wrapper>
            );
          } else {
            return <PaymentEmpty />;
          }
        }}
      </MenuConsumer>
    </React.Fragment>
  );
});

const Wrapper = styled.div`
  background: rgb(232, 235, 235);
  height: 100%;
  padding: 20px 0;
  height: auto;
`;

export default Checkout;
