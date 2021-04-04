import React, { createElement } from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavigationItem.module.css";

const NavigationItem = (props) => {
  const Icon = createElement(props.icon, {
    color: "white",
    className: classes.Icon,
  });
  console.log(props.icon);
  console.log(Icon);
  return (
    <li className={classes.NavigationItem}>
      {Icon}
      <NavLink
        to={props.link}
        activeClassName={classes.active}
        exact={props.exact}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
