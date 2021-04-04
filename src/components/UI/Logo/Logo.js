import React from "react";
import classes from "./Logo.module.css";
import { ReactComponent as LogoImg } from "../../../assets/logo.svg";

import { ReactComponent as LogoImgSmall } from "../../../assets/logo__small.svg";

const Logo = (props) => {
  let logoClasses = [classes.Logo];
  let logo = <LogoImg className={classes.LogoImg} />;
  console.log();
  if (props.smallLogo) {
    logo = <LogoImgSmall className={classes.LogoImgSmall} />;
    logoClasses.push(classes.Small);
  }

  return <div className={logoClasses.join(" ")}>{logo}</div>;
};
export default Logo;
