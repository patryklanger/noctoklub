import React, { useEffect, useState } from "react";
import Logo from "../../UI/Logo/Logo";
import SocialLinks from "../../UI/SocialLinks/SocialLinks";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./Toolbar.module.css";
import { CaretDownOutline } from "react-ionicons";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import AnimatedMenu from "../../UI/Buttons/AnimatedMenu/AnimatedMenu";
const Toolbar = (props) => {
  const trigger = useScrollTrigger({ threshold: 140 });
  useEffect(() => {
    props.smallHandler(trigger);
    props.close();
  }, [trigger]);

  const toolbarClasses = [classes.Toolbar];
  const socialClasses = [classes.SocialLinks];
  if (trigger) {
    toolbarClasses.push(classes.SmallToolbar);
    socialClasses.push(classes.OpenSocial);
  }
  return (
    <div className={toolbarClasses.join(" ")}>
      <Logo smallLogo={trigger} />
      <nav className={classes.Navigation}>
        <NavigationItems />
      </nav>
      <div className={socialClasses.join(" ")}>
        <SocialLinks />
      </div>
      <div className={classes.MobileOnly}>
        {/* <CaretDownOutline
          color="#d4af37"
          cssClasses={caretClasses.join(" ")}
          onClick={props.toggle}
        /> */}
        <AnimatedMenu opened={props.opened} onClickProp={props.toggle} />
      </div>
    </div>
  );
};

export default Toolbar;
