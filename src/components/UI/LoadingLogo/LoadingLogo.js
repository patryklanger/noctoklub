import React, { useEffect, useState } from "react";
import classes from "./LoadingLogo.module.css";

import { ReactComponent as MoonIconNew } from "../../../assets/Moon.svg";
import { ReactComponent as NIcon } from "../../../assets/N.svg";
import { ReactComponent as OIcon } from "../../../assets/O.svg";
import { ReactComponent as CIcon } from "../../../assets/C.svg";
import { ReactComponent as OuterLogo } from "../../../assets/OuterLogo.svg";

const LoadingLogo = (props) => {
  const [squareClasses, setSquareClasses] = useState([classes.Square]);
  useEffect(() => {
    const updatedArr = [...squareClasses];
    updatedArr.push(classes.active);
    setSquareClasses(updatedArr);
    const squareWidth = document.querySelector(".Square");
    const updateArr = [...updatedArr];
    updateArr.push(classes.Disapear);
    setTimeout(() => {
      setSquareClasses(updateArr);
    }, 1800);
  }, []);

  return (
    <div
      className={classes.Con}
      //   style={{
      //     transform: `scale(${windowWidth / 1440})`,
      //   }}
    >
      <div
        className={squareClasses.join(" ")}
        // style={{
        //   transform: `scale(${windowWidth / 1440})`,
        // }}
      >
        <div className={classes.Outer}>
          <OuterLogo className={classes.OuterLogo} />
          <MoonIconNew className={classes.Moon} />
        </div>

        <div className={classes.verline__2}></div>
        <div className={classes.verline__1}></div>
        <div className={classes.horline__2}></div>
        <div className={classes.horline__1}></div>
        <div className={classes.LogoLetters}>
          <NIcon className={classes.NLet} />
          <OIcon className={classes.OLet} />
          <CIcon className={classes.CLet} />
        </div>
      </div>
    </div>
  );
};
export default LoadingLogo;
