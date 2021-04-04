import React, { Component } from "react";
import SocialLinks from "../../UI/SocialLinks/SocialLinks";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./Sidedrawer.module.css";

const Sidedrawer = (props) => {
  const sidedrawerClasses = [classes.Sidedrawer];
  if (props.smallToolbar) sidedrawerClasses.push(classes.SmallToolbar);
  if (props.closed) {
    console.log(`closed: `, props.closed);
    sidedrawerClasses.push(classes.Closed);
  }
  return (
    <div className={sidedrawerClasses.join(" ")}>
      <div className={classes.SidedrawerContainer}>
        <NavigationItems />
        <SocialLinks />
      </div>
    </div>
  );
};
export default Sidedrawer;
