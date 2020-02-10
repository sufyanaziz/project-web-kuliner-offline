import React from "react";
import styled from "styled-components";
import classes from "./Menu.module.css";
import ListMenu from "../../components/ListMenu/ListMenu";
import Footer from "../../components/ui/Footer/Footer";
import { MenuConsumer } from "../../store/context";

const Menu = React.memo(props => {
  return (
    <React.Fragment>
      <Wrapper>
        <div className="container">
          <div className="card">
            <div className={classes.Dekorasi} />
            <div className={classes.Menu}>
              <div className="card-body">
                <h1 className="text-center">Menu</h1>
                <div className={classes.Contain}>
                  <div className="mt-4">
                    <hr />
                    <h2>Makanan</h2>
                    <hr />
                    <MenuConsumer>
                      {value => {
                        return value.menus.map(menu => {
                          if (menu.ket.tipe === "makanan") {
                            return (
                              <div key={menu.id}>
                                <ListMenu menu={menu} value={value} />
                              </div>
                            );
                          }
                        });
                      }}
                    </MenuConsumer>
                    <hr />
                    <h2>Minuman</h2>
                    <hr />
                    <MenuConsumer>
                      {value => {
                        return value.menus.map(menu => {
                          if (menu.ket.tipe === "minuman") {
                            return (
                              <div key={menu.id}>
                                <ListMenu menu={menu} value={value} />
                              </div>
                            );
                          }
                        });
                      }}
                    </MenuConsumer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
      <Footer />
    </React.Fragment>
  );
});

const Wrapper = styled.div`
  background: rgb(232, 235, 235);
  height: 100%;
  padding: 20px 0;
`;

export default Menu;
