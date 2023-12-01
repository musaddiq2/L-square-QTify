import React, { useEffect, useState } from "react";
import style from "../Section/Section.module.css";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import { CircularProgress } from "@mui/material";
function Section({ title, type, data }) {
  const [carouselToggle, setCarouselToggle] = useState(true);
  const handleToggle = () => {
    setCarouselToggle((prevState) => !prevState);
  };
  return (
    <div className={style.Wrapper}>
      <h3 className={style.header}>{title}</h3>
      <h4 className={style.showAll} onClick={handleToggle}>
      {carouselToggle ? "Show All" : "Collapse All"}
      </h4>

      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={style.cardWrapper}>
          {!carouselToggle ? (
            <div className={style.wrapper}>
              {data.map((item) => {
                return <Card data={item} type={type} />;
              })}
            </div>
          ) : (
            <Carousel data={data} renderComponent={(data) => <Card data={data} type={type}/>} />
          )}
        </div>
      )}
    </div>
  );
}
export default Section;
