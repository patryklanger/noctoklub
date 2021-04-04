import React, { useEffect, useRef, useState } from "react";
import classes from "./MainPage.module.css";
import LoadingLogo from "../../UI/LoadingLogo/LoadingLogo";
import background from "../../../assets/1.jpg";
import background1 from "../../../assets/noc-background1.jpg";
import background2 from "../../../assets/noc-background2.jpg";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import Divider from "../../UI/Divider/Divider";
import Map from "../../Map/Map";

const MainPage = () => {
  const [photoClasses, setClass] = useState([classes.Photo]);
  const [transform, setTransform] = useState([-100, 0, 100]);
  useEffect(() => {
    const id = setInterval(() => {
      const tempArr = [...transform];
      let tempVal = tempArr[2];
      tempArr.pop();
      tempArr.unshift(tempVal);
      setTransform(tempArr);
      console.log(transform);
      console.log("---");
    }, 3000);
    return () => clearInterval(id);
  }, [transform]);

  const myRef = useRef(null);
  const executeScroll = () => {
    console.log(myRef);
    myRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    setTimeout(() => {
      const updatedArr = [...photoClasses];
      updatedArr.push(classes.photoActive);
      setClass(updatedArr);
    }, 1800);
  }, []);

  const logoClasses = [classes.Logo, classes.active];
  return (
    <React.Fragment>
      <div className={classes.MainPage}>
        <div
          className={photoClasses.join(" ")}
          style={{
            backgroundImage: `url(${background})`,
            // transform: `translateX(${transform[0]}%)`,

            // display: `${transform[0] === 100 ? "none" : "block"}`,
          }}
        ></div>

        {/* <div
          className={photoClasses.join(" ")}
          style={{
            backgroundImage: `url(${background1})`,
            transform: `translateX(${transform[1]}%)`,

            display: `${transform[1] === 100 ? "none" : "block"}`,
          }}
        ></div>

        <div
          className={photoClasses.join(" ")}
          style={{
            backgroundImage: `url(${background2})`,
            transform: `translateX(${transform[2]}%)`,
            display: `${transform[2] === 100 ? "none" : "block"}`,
          }}
        ></div> */}
        <LoadingLogo className={logoClasses.join(" ")} loading />
      </div>
      <PhotoGallery myReference={myRef} />
      <Map />
    </React.Fragment>
  );
};

export default MainPage;
