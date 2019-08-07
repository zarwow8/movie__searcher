import React, { useEffect, useState } from "react";
import { getPopularFilms } from "../actions/getPopularFilms";
import { getSeachedFilm } from "../actions/searchFilm";
import { useDispatch, useSelector } from "react-redux";
import styles from "./listFilms.module.css";
import Paginations from "./Pagination";

const ListFilms = () => {
  const dispatch = useDispatch();
  const { total_pages, results } = useSelector(store => store.DataFilms.data);
  const { searchingQuery, nameFilm } = useSelector(store => store.SearchInfo);
  const [currentPage, setCurrentPage] = useState(1);

  const PagPopulFilm = currency => {
    dispatch(getPopularFilms(currency));
  };
  const PagSearchFilm = (name, currency) => {
    dispatch(getSeachedFilm(name, currency));
  };
  useEffect(() => {
    searchingQuery
      ? PagSearchFilm(nameFilm, currentPage)
      : PagPopulFilm(currentPage);
  }, [currentPage, searchingQuery, nameFilm]);
  return (
    <div className={"container"}>
      <ul className={styles.list}>
        {results === undefined ? (
          <h1>Список фильмов пуст :с</h1>
        ) : (
          results.map(item => (
            <li className={styles.list__item} key={item.id}>
              <img
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${
                  item.poster_path
                }`}
                alt={item.title || "Постер фильма"}
              />
            </li>
          ))
        )}
      </ul>
      <Paginations
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        total_pages={total_pages}
      />
    </div>
  );
};
export default ListFilms;
