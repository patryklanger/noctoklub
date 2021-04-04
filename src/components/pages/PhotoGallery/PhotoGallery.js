import React, { Component } from "react";

import "react-photoswipe/lib/photoswipe.css";
import classes from "./PhotoGallery.module.css";
import { imgArr } from "../../../assets/gallery/gallery";
import { useState } from "react";

const PhotoGallery = (props) => {
  const [clicked, setClicked] = useState(false);

  const clickHandler = (e) => {
    console.log(";)");
    console.log(e.target);
  };
  //   imgArr.forEach((el) => {
  //     console.log(el.thumb.offsetHeight / 10);
  //     const item = (
  //       <Item original={el.img} thumbnail={el.thumb}>
  //         {({ ref, open }) => (
  //           <div className={classes.Photo} onClick={open}>
  //           </div>
  //         )}
  //       </Item>
  //     );
  //     itemArr.push(item);
  //   });
  return (
    <div className={classes.PhotoGallery}>
      <div className={classes.PhotoRow}>
        <div className={classes.Photo}>
          <img
            src={imgArr[0].thumb}
            className={classes.firstTypeImg}
            onClick={clickHandler}
          />
        </div>
        <div className={classes.Photo}>
          <img src={imgArr[1].thumb} className={classes.firstTypeImg} />
        </div>
        <div className={classes.Photo}>
          <img src={imgArr[2].thumb} className={classes.firstTypeImg} />
        </div>
      </div>
      <div className={classes.PhotoRow}>
        <div className={classes.Photo}>
          <img src={imgArr[3].thumb} className={classes.firstTypeImg} />
        </div>
        <div className={classes.Photo}>
          <img src={imgArr[4].thumb} className={classes.firstTypeImg} />
        </div>
        <div className={classes.Photo}>
          <img src={imgArr[5].thumb} className={classes.firstTypeImg} />
        </div>
      </div>
      <div className={classes.PhotoRow}>
        <div className={classes.Photo}>
          <img src={imgArr[6].thumb} className={classes.firstTypeImg} />
        </div>
        <div className={classes.Photo}>
          <img src={imgArr[7].thumb} className={classes.firstTypeImg} />
        </div>{" "}
        <div className={classes.Photo}>
          <img src={imgArr[8].thumb} className={classes.firstTypeImg} />
        </div>
      </div>
    </div>
  );
};
export default PhotoGallery;
