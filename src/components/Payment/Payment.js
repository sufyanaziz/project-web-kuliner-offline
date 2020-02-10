import React from "react";
import styled from "styled-components";
import PaymentList from "./PaymentList";

const Payment = ({ value }) => {
  const { cart } = value;
  const { cartSubTotals, convertRupiah } = value;

  console.log({ cart });
  return (
    <Wrapper>
      <div style={{ maxHeight: "350px", overflow: "auto" }}>
        <div style={{ padding: "10px 0" }}>
          {cart.map(menu => {
            return <PaymentList key={menu.id} cart={menu} value={value} />;
          })}
        </div>
      </div>
      <SubTotal>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ color: "#b1aeae" }}>
            <p>Subtotal</p>
          </div>
          <div style={{ marginLeft: "auto", color: "#b1aeae" }}>
            <p>Rp. {convertRupiah(cartSubTotals)}</p>
          </div>
        </div>
      </SubTotal>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 20px;
`;

const SubTotal = styled.div`
  border-top: 1px solid #b1aeae;
  padding: 10px 0;
`;

export default Payment;
