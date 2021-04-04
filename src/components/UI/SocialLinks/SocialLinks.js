import React from "react";
import SocialFacebook from "./SocialFacebook/SocialFacebook";
import classes from "./SocialLinks.module.css";

const SocialLinks = () => {
  return (
    <div className={classes.SocialLinks}>
      <SocialFacebook type="facebook" />
      <SocialFacebook type="instagram" />
    </div>
  );
};

export default SocialLinks;
