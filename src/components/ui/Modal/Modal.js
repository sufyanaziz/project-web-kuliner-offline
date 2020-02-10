import React, { Component } from "react";

import { MenuConsumer } from "../../../store/context";
import styled from "styled-components";

export default class Modal extends Component {
  render() {
    return (
      <MenuConsumer>
        {value => {
          const {
            modalOpen,
            closeModal,
            convertRupiah,
            addToCart
          } = value;
          const { id, img, nama, harga, info,inCart } = value.modalProduct;

          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 mx-auto col-md-6 col-lg-4 text-capitalize p-0 my-auto"
                    >
                      <img src={img} className="img-fluid" alt="product"></img>
                      <div className="px-4">
                        <h5 className="mt-5 mb-3 text-muted">
                          <strong>{nama}</strong>
                        </h5>
                        <p style={{ color: "rgb(146, 145, 145", fontSize:'.9rem' }}>Rp. {convertRupiah(harga)}</p>
                        <small style={{ color: "rgb(146, 145, 145" }}>
                          {info}
                        </small>
                        <div className="">
                          <button
                            disabled = {inCart? true : false}
                            className="btn btn-order w-100 mt-2"
                            onClick={() => addToCart(id)}
                          >
                            {inCart? "You already have one" : "+ add to my order" }
                          </button>
                          
                          <span
                            className="btn btn-cancel w-100 my-3"
                            onClick={() => closeModal()}
                          >
                            back to menu
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </MenuConsumer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  z-index: 9999;
  overflow: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: white;
    border-radius: 0.5rem;
  }
`;
