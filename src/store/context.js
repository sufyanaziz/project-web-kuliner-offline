import React, { Component } from "react";

import { listData, detailList } from "../data-menu";

const MenuContext = React.createContext();

class MenuProvider extends Component {
  state = {
    menus: [],
    cart: [],
    modalOpen: false,
    modalProduct: detailList,
    cartSubTotals: 0
  };

  componentDidMount() {
    this.tampilMenu();
  }

  tampilMenu = () => {
    let tempMenu = [];
    listData.forEach(list => {
      const singleList = { ...list };
      tempMenu = [...tempMenu, singleList];
    });
    this.setState(() => {
      return {
        menus: tempMenu
      };
    });
  };
  getMenuById = id => {
    const menu = this.state.menus.find(list => list.id === id);
    return menu;
  };
  getMenuByTipe = tipe => {
    const menu = this.state.menus.ket.tipe.find(list => list.tipe === tipe);
    return menu;
  };
  handleDetailByTipe = tipe => {
    const menu = this.getMenuByTipe(tipe);
    let list = [];
    listData.forEach(item => {
      const singleItem = { ...item };
      list = [...list, singleItem[menu]];
    });
    this.setState(() => {
      return { menus: list };
    });
  };

  openModal = id => {
    const product = this.getMenuById(id);
    product.count = 1;
    const harga = product.harga;
    product.total = harga;

    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };

  closeModal = () => {
    this.setState(
      () => {
        return { modalOpen: false };
      },
      () => this.addTotals()
    );
  };

  increment = id => {
    // console.log("increment")
    let tempMenu = [...this.state.menus];
    const selectedMenu = tempMenu.find(item => item.id === id);
    const index = tempMenu.indexOf(selectedMenu);

    const menu = tempMenu[index];

    menu.count = menu.count + 1;
    const harga = menu.harga;
    menu.total = menu.count * harga;
    this.setState(
      () => {
        return {
          menus: [...tempMenu]
        };
      },
      () => this.addTotals()
    );
  };

  decrement = id => {
    let tempMenu = [...this.state.menus];
    const selectedMenu = tempMenu.find(item => item.id === id);
    const index = tempMenu.indexOf(selectedMenu);

    const menu = tempMenu[index];

    menu.count = menu.count - 1;
    if (menu.count < 1) {
      menu.count = 1;
    } else {
      const harga = menu.harga;
      menu.total = menu.count * harga;
      this.setState(
        () => {
          return {
            menus: [...tempMenu]
          };
        },
        () => this.addTotals()
      );
    }
  };
  removeItem = id => {
    let tempMenu = [...this.state.menus];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter(item => item.id !== id);
    const index = tempMenu.indexOf(this.getMenuById(id));
    let removeMenu = tempMenu[index];
    removeMenu.inCart = false;
    removeMenu.count = 0;
    removeMenu.total = 0;
    this.setState(
      () => {
        return {
          cart: [...tempCart],
          menus: [...tempMenu]
        };
      },
      () => {
        this.addTotals();
        console.log(this.state.cart);
      }
    );
  };

  addToCart = id => {
    let tempMenu = [...this.state.menus];
    const index = tempMenu.indexOf(this.getMenuById(id));
    const menu = tempMenu[index];
    menu.inCart = true;

    this.setState(
      () => {
        return {
          menus: tempMenu,
          cart: [...this.state.cart, menu],
          modalOpen: false
        };
      },
      () => {
        this.addTotals();
        console.log(this.state.cart);
      }
    );
  };
  addTotals = () => {
    let Subtotal = 0;
    this.state.cart.map(menu => (Subtotal += menu.total));

    this.setState(() => {
      return {
        cartSubTotals: Subtotal
      };
    });
  };

  convertRupiah = rp => {
    const bilangan = rp;

    let reverse = bilangan
        .toString()
        .split("")
        .reverse()
        .join(""),
      ribuan = reverse.match(/\d{1,3}/g);
    ribuan = ribuan
      .join(".")
      .split("")
      .reverse()
      .join("");

    return ribuan;
  };

  render() {
    return (
      <MenuContext.Provider
        value={{
          ...this.state,
          handleDetailByTipe: this.handleDetailByTipe,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          addToCart: this.addToCart,
          convertRupiah: this.convertRupiah
        }}
      >
        {this.props.children}
      </MenuContext.Provider>
    );
  }
}

const MenuConsumer = MenuContext.Consumer;

export { MenuProvider, MenuConsumer };
