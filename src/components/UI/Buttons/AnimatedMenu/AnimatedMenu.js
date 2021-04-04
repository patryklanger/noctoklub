import classes from "./AnimatedMenu.module.css";
import React, { Component } from "react";

const AnimatedMenu = (props) => {
  const line1Classes = [classes.Line, classes.Line1];
  const line2Classes = [classes.Line, classes.Line2];
  const line3Classes = [classes.Line, classes.Line3];

  if (props.opened) {
    line1Classes.push(classes.Open);
    line2Classes.push(classes.Open);
    line3Classes.push(classes.Open);
  }

  return (
    <div className={classes.Container} onClick={props.onClickProp}>
      <div className={line1Classes.join(" ")}></div>
      <div className={line2Classes.join(" ")}></div>
      <div className={line3Classes.join(" ")}></div>
    </div>
  );
};

export default AnimatedMenu;
