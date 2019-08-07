import React, { useEffect } from "react";
import styles from "./details.module.css";
import { getDetailsFilm } from "../actions/getDetailsFilm";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const DefailtFilm = ({ match }) => {
  const id = match.params.id;
  const dispatch = useDispatch();
  const {
    desc: { title, poster_path, overview, genres },
    isLoading
  } = useSelector(store => store.DetailsFilm);
  const nameGengres =
    genres !== undefined
      ? genres.map((item, i) => <li key={i}>{item.name}</li>)
      : null;
  console.log(nameGengres);
  const getDetails = id => {
    dispatch(getDetailsFilm(id));
  };
  console.log(isLoading);

  useEffect(() => {
    getDetails(id);
  }, [id]);

  return (
    <div className="container">
      {isLoading ? (
        <h1>Загрузка</h1>
      ) : (
        <>
          <Link to="/">
            <h4>Назад</h4>
          </Link>
          <div className={styles.about}>
            <img
              src={`https://image.tmdb.org/t/p/w400${poster_path}`}
              alt="Постер фильма"
            />
            <div className={styles.desc}>
              <h2>{title || "Название фильма"}</h2>
              <div className={styles.genres}>
                {" "}
                <p>Жанры:</p>
                <ul>{nameGengres}</ul>
              </div>

              <div className={styles.about__overview}>
                <p className={styles.name}>Описание:</p>
                <p className={styles.overview}>{overview}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DefailtFilm;
