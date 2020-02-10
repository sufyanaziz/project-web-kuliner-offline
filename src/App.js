import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Home from "./containers/Home/Home";
import Menu from "./containers/Menu/Menu";
import OrderOnline from "./containers/OrderOnline/OrderOnline";
import AboutUs from "./containers/AboutUs/AboutUs";
import Checkout from "./containers/Checkout/Checkout";
import Default from "./containers/Default/Default";
import "./App.css";

import Layout from "./hoc/Layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <React.Fragment>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/order-online" component={OrderOnline} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/checkout" component={Checkout} />
          <Route component={Default} />
        </Switch>
      </Layout>
    </React.Fragment>
  );
};

export default App;
