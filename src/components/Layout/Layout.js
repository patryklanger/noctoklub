import React, { Component } from "react";
import Sidedrawer from "../Navigation/Sidedrawer/Sidedrawer";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import MainPage from "../pages/MainPage/MainPage";
import classes from "./Layout.module.css";

class Layout extends Component {
  state = {
    sideDrawerOpened: false,
    toolbarSmallSize: false,
    transform: [0, -100, -200],
  };

  // componentDidMount() {
  //   setInterval(()=>{
  //     const tempArr =
  //   },2500)
  // }

  sideDrawerCloseHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpened: false };
    });
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpened: !prevState.sideDrawerOpened };
    });
  };
  toolbarSmallSizeHandler = (trigger) => {
    this.setState((prevState) => {
      console.log(trigger);
      return { toolbarSmallSize: trigger };
    });
  };
  render() {
    return (
      <React.Fragment>
        <MainPage />
        <Toolbar
          close={this.sideDrawerCloseHandler}
          toggle={this.sideDrawerToggleHandler}
          opened={this.state.sideDrawerOpened}
          smallHandler={this.toolbarSmallSizeHandler}
        />
        <Sidedrawer
          opened={(trigger) => this.state.sideDrawerOpened(trigger)}
          smallToolbar={this.state.toolbarSmallSize}
          closed={!this.state.sideDrawerOpened}
        />
      </React.Fragment>
    );
  }
}

export default Layout;
