import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.module.css";
import { HomeSharp, Calendar, Wine, People, Mail } from "react-ionicons";

const NavigationItems = () => {
  console.log(HomeSharp);
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" icon={HomeSharp} exact>
        Strona główna
      </NavigationItem>

      <NavigationItem link="/wydarzenia" icon={Calendar}>
        Wydarzenia
      </NavigationItem>

      <NavigationItem link="/oferta" icon={Wine}>
        Oferta
      </NavigationItem>

      <NavigationItem link="/o-nas" icon={People}>
        O nas
      </NavigationItem>

      <NavigationItem link="/kontakt" icon={Mail}>
        Kontakt
      </NavigationItem>
    </ul>
  );
};
export default NavigationItems;
