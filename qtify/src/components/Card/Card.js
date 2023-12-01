import React from "react";
import { Tooltip, Chip } from "@mui/material";
import style from "./Card.module.css";
import { Link } from "react-router-dom";
function Card({ data, type }) {
  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { image, follows, slug, title, songs } = data;

        return (
          <>
            <Tooltip title={`${songs.length}songs`} placement="top" arrow>
              <Link to={`/album/${slug}`}>
                <div className={style.wrapper}>
                  <div className={style.card}>
                    <img
                      src={image}
                      alt={`Album cover for ${title}`}
                      loading="lazy"
                    />
                    <div className={style.banner}>
                      <Chip
                        label={`${follows} Follows`}
                        size="small"
                        className={style.chip}
                      />
                    </div>
                  </div>
                </div>
                <div className={style.titleWrapper}>
                  <p>{title}</p>
                </div>
              </Link>
            </Tooltip>
          </>
        );
      }
      case "songs": {
        const { image, like, title, songs } = data;

        return (
          <>
            <Tooltip title={`${songs.length}songs`}>
              <div className={style.wrapper}>
                <div className={style.card}>
                  <img src={image} alt="songs" loading="lazy" />
                </div>
                <div className={style.banner}>
                  <div className={style.pill}>
                    <p>{`${like}like`}</p>
                  </div>
                </div>
              </div>
              <div className={style.titleWrapper}>
                <p>{title}</p>
              </div>
            </Tooltip>
          </>
        );
      }
      default:
        return <></>;
    }
  };
  return getCard(type);
}
export default Card;
