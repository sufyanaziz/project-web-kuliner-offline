import React from "react";

import Order from "../../components/Order/Order";
import classes from "./OrderOnline.module.css";
import styled from "styled-components";
import Footer from "../../components/ui/Footer/Footer";
import { MenuConsumer } from "../../store/context";
import Modal from "../../components/ui/Modal/Modal";
import Cart from "../../components/Cart/Cart";

const OrderOnline = React.memo(props => {
  return (
    <React.Fragment>
      <Wrapper>
        <div className="container">
          <div className="card">
            <div className={classes.Dekorasi}></div>
            <div className={classes.OrderOnline}>
              <div className="row">
                <div className="col-md-8" style={{ textAlign: "center" }}>
                  <div className={classes.MainMenu}>
                    <h2 className={classes.Judul}>Menu</h2>
                    <hr style={{ width: "50%" }} />
                    <div className="mt-5">
                      <MenuConsumer>
                        {value => {
                          return value.menus.map(menu => {
                            return (
                              <Order key={menu.id} menu={menu} value={value} />
                            );
                          });
                        }}
                      </MenuConsumer>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <Cart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
      <Footer />
      <Modal />
    </React.Fragment>
  );
});

const Wrapper = styled.div`
  background: rgb(232, 235, 235);
  height: 100%;
  padding: 20px 0;
`;

export default OrderOnline;
