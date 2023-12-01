import React, { useEffect, useState } from "react";
import style from "../Section/Section.module.css";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import { CircularProgress } from "@mui/material";
import Filters from "../Filters/Filters";
function Section({ title, type, filterSource, data }) {
  const [carouselToggle, setCarouselToggle] = useState(true);
  const [filters, setFilters] = useState([{ key: "all", label: "All" }]);
  const [selectedfilterIndex, setSelectedfilterIndex] = useState(0);
  const handleToggle = () => {
    setCarouselToggle((prevState) => !prevState);
  };
  useEffect(() => {
    if (filterSource) {
      filterSource().then((response) => {
        const { data } = response;
        setFilters([...filters, ...data]);
      });
    }
  }, []);
  const showFilters = filters.length > 1;
  const cardToRender = data.filter((card) =>
    showFilters && selectedfilterIndex !== 0
      ? card.genre.key === filters[selectedfilterIndex].key
      : card
  );
  return (
    <div className={style.Wrapper}>
      <h3 className={style.header}>{title}</h3>
      <h4 className={style.showAll} onClick={handleToggle}>
        {carouselToggle ? "Show All" : "Collapse All"}
      </h4>
      {showFilters && (
        <div className={style.filterWrapper}>
          <Filters
            filters={filters}
            selectedfilterIndex={selectedfilterIndex}
            setSelectedfilterIndex={setSelectedfilterIndex}
          />
        </div>
      )}
      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={style.cardWrapper}>
          {!carouselToggle ? (
            <div className={style.wrapper}>
              {cardToRender.map((item) => {
                return <Card data={item} type={type} />;
              })}
            </div>
          ) : (
            <Carousel
              data={cardToRender}
              renderComponent={(data) => <Card data={data} type={type} />}
            />
          )}
        </div>
      )}
    </div>
  );
}
export default Section;
