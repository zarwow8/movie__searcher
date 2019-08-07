import React, { useState } from "react";
import styles from "./header.module.css";
import { getNameSearchFilm } from "../actions/searchFilm";
import { useDispatch } from "react-redux";
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
            onKeyPress={e => {
              if (e.key === "Enter") dispatch(getNameSearchFilm(value));
            }}
          />
          <button
            className={styles.button}
            onClick={() => dispatch(getNameSearchFilm(value))}
          >
            Искать
          </button>
        </label>
      </div>
    </header>
  );
};

export default Header;
