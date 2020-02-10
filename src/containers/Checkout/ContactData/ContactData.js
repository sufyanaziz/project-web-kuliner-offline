import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Button from "../../../components/ui/Button/Button";

import Input from "../../../components/ui/Input/Input";
import axios from "../../../axios-order";

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      street: {
        elementType: "textarea",
        elementConfig: {
          type: "text",
          placeholder: "Street"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      numberHp: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Number Hp"
        },
        value: "",
        validation: {
          required: true,
          isNumeric: true,
          minLength: 11,
          maxLength: 13
        },
        valid: false,
        touched: false
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Mail"
        },
        value: "",
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        touched: false
      }
    },
    formIsValid: false,
    payment: false,
    idPembayaran: ""
  };

  orderHandler = event => {
    event.preventDefault();
    const formData = {};
    for (let formElementIdentifier in this.state.orderForm) {
      formData[formElementIdentifier] = this.state.orderForm[
        formElementIdentifier
      ].value;
    }
    const order = {
      order: this.props.cart,
      price: this.props.value.cartSubTotals,
      orderData: formData
    };
    axios
      .post("/orders.json", order)
      .then(response => {
        this.setState({ loading: false });
        this.setState({ idPembayaran: response.data.name });
        Swal.fire({
          icon: "success",
          title: "Pesanan Berhasil Dibuat",
          html: `Id Pembayaran Anda <b style="margin-left:10px;"> ${this.state.idPembayaran} </b>`,
          footer: `<br/>
          <i className="fas fa-info-circle mr-3"></i> Harap Tunggu, dan Simpan Id Pembayaran tersebut 
          `
        });
        this.props.link.history.push("/");
      })
      .catch(error => {
        this.setState({ loading: false });
      });
  };

  checkValidaty = (value, rules) => {
    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }
    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
    }

    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid;
    }
    return isValid;
  };

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedOrderForm = {
      ...this.state.orderForm
    };
    const updatedFormElement = {
      ...updatedOrderForm[inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidaty(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    updatedOrderForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid });
  };

  render() {
    const formElementArray = [];
    for (let key in this.state.orderForm) {
      formElementArray.push({
        id: key,
        config: this.state.orderForm[key]
      });
    }
    let form = (
      <form onSubmit={this.orderHandler}>
        {formElementArray.map(formElement => (
          <Input
            key={formElement.key}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            inValid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={event => this.inputChangedHandler(event, formElement.id)}
          />
        ))}
        <div style={{ display: "flex", padding: "50px 0 0 0" }}>
          <Link to="/order-online">
            <div>
              <span className="btn btn-cancel">Back</span>
            </div>
          </Link>
          <div style={{ marginLeft: "auto" }}>
            <Button btnType="Success" disabled={!this.state.formIsValid}>
              ORDER
            </Button>
          </div>
        </div>
      </form>
    );
    return (
      <div style={{}}>
        <div
          style={{
            width: "100%",
            height: "30px",
            border: "1px solid #087F31",
            borderLeft: "5px solid #087F31",
            borderRadius: "3px",
            display: "flex",
            alignItems: "center",
            marginBottom: "20px"
          }}
        >
          <div
            style={{
              color: "#087F31",
              width: "40px",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <i className="fas fa-info-circle"></i>
          </div>
          <div
            style={{
              padding: "2px 10px",
              height: "100%",
              color: "#087F31"
            }}
          >
            <p>Pembayaran Hanya Dapat Dilakukan Ditempat (COD)</p>
          </div>
        </div>
        <h4 style={{ color: "#b1aeae", marginBottom: "20px" }}>
          Let's add your contact details
        </h4>
        <div className="">{form}</div>
      </div>
    );
  }
}

export default ContactData;
