import React from "react";
import classes from "./SocialFacebook.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookF,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const SocialFacebook = (props) => {
  let classType, iconName;
  switch (props.type) {
    case "facebook":
      classType = classes.Facebook;
      iconName = faFacebookF;
      break;

    case "instagram":
      classType = classes.Instagram;
      iconName = faInstagram;
      break;

    case "youtube":
      classType = classes.Youtube;
      iconName = faYoutube;
      break;
  }

  return (
    <div className={[classes.Social, classType].join(" ")}>
      <FontAwesomeIcon icon={iconName} color="white" className={classes.Icon} />
    </div>
  );
};

export default SocialFacebook;
