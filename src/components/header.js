import React, { useState } from "react";
import styles from "./header.module.css";
import { getSeachedFilm } from "../actions/searchFilm";
import { useDispatch, useSelector } from "react-redux";
const Header = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const searchingFilm = e => {
    const nameFilm = e.target.value;
    setValue(nameFilm);
  };

  return (
    <header className={styles.header}>
      <div className={"container"}>
        <label className={styles.label}>
          Поиск:{" "}
          <input
            type="text"
            placeholder="Введите название фильма"
            className={styles.input}
            onChange={searchingFilm}
          />
          <button
            className={styles.button}
            onClick={() => dispatch(getSeachedFilm(value))}
          >
            Искать
          </button>
        </label>
      </div>
    </header>
  );
};

export default Header;
