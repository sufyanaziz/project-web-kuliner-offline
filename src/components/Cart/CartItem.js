import React from "react";

import {MenuConsumer} from '../../store/context';
import styled from "styled-components";

export default function CartItem({ item, value }) {
  const { id, nama, count, total } = item;
  const { increment, decrement, removeItem, convertRupiah } = value;
  return (
    <Wrapper className="p-0">
      <div
        className="d-flex p-3 kartu"
        style={{ alignItems: "center", color: "#b1aeae" }}
      >
        <small className="">{count} x</small>
        <small className="flex-grow-1 ml-2"> {nama}</small>
        <small className="ml-2 uang">Rp. {convertRupiah(total)}</small>
        <div className="d-flex flex-column hitung">
          <span className="btn-hitung" onClick={()=>increment(id)}>+</span>
          <MenuConsumer>
            {()=>{
              if(count > 1){
                return <span className="btn-hitung" onClick={()=>decrement(id)}>-</span>
              }else{
                return <span className="btn-hitung" onClick={()=>removeItem(id)}>x</span>
              }
            }}
          </MenuConsumer>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
.kartu{
  position:relative;
  overflow:hidden;
}
  .btn-hitung {
    display: 1;
    transition: 0.5s;
  }
  .uang{
    transform : translate(0,0);
    transition: all .5s linear;
  }
  .hitung{
    position:absolute;
    right:0;
    transform: translate(100%,0);
    transition: all .5s linear;
  }

  &:hover {
    .kartu {
      background: rgb(241, 239, 239);
      cursor:pointer;
    }
  }
  .kartu:hover .hitung{
    transform:translate(-30%,0);
  }
  .kartu:hover .uang{
    transform : translate(-25%,0);
  }
`;

