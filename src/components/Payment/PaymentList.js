import React from "react";
import styled from "styled-components";

const paymentlist = ({ cart, value }) => {
  const { nama, count, total } = cart;
  const { convertRupiah } = value;

  return (
    <Wrapper>
      <div style={{ color: "#b1aeae" }}>
        <p>{count}</p>
      </div>
      <div className="ml-1 mr-2" style={{ color: "#b1aeae" }}>
        <p>x</p>
      </div>
      <div style={{ color: "#b1aeae" }}>
        <p>{nama}</p>
      </div>
      <div style={{ marginLeft: "auto", color: "#b1aeae" }}>
        <p>Rp. {convertRupiah(total)}</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export default paymentlist;
