import React, { useEffect } from "react";
import { getPopularFilms } from "../actions/getPopularFilms";
import { useDispatch, useSelector } from "react-redux";
import styles from "./listFilms.module.css";
const ListFilms = () => {
  const dispatch = useDispatch();
  const result = useSelector(store => store.DataFilms.data.results);

  useEffect(() => {
    dispatch(getPopularFilms());
  }, [dispatch]);

  return (
    <div className={"container"}>
      <ul className={styles.list}>
        {result === undefined ? (
          <h1>Список фильмов пуст :с</h1>
        ) : (
          result.map(item => (
            <li className={styles.list__item} key={item.id}>
              <img
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${
                  item.poster_path
                }`}
                alt={item.title}
              />
            </li>
          ))
        )}
      </ul>
    </div>
  );
};
export default ListFilms;
