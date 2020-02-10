import React, { Component } from "react";
import { MenuConsumer } from "../../store/context";
import EmptyCart from "./EmptyCart";
import CartJumlah from "./CartJumlah";
import CartSubTotals from "./CartSubTotals";
import CartList from './CartList';

import styled from "styled-components";

export default class Cart extends Component {
  render() {
    return (
      <section>
        <MenuConsumer>
          {value => {
              const { cart } = value;

            if (cart.length > 0) {
              return (
                <div className="container">
                  <CartJumlah value={value}/>
                  <CartContainer>
                    <CartList value={value} />
                  </CartContainer>
                  <CartSubTotals value={value} />
                </div>
              );
            } else {
              return (
                <div className="container">
                  <CartContainer>
                    <EmptyCart />
                  </CartContainer>
                </div>
              );
            }
          }}
        </MenuConsumer>
      </section>
    );
  }
}

const CartContainer = styled.div`
  overflow: auto;
  max-height: 350px;
`;
