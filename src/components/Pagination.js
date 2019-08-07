import React from "react";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import styles from "./pagination.module.css";
const Paginations = ({ currentPage, total_pages, setCurrentPage }) => {
  const setValue = page => {
    setCurrentPage(page);
  };
  const totalPages = total_pages === undefined ? null : total_pages * 10;
  return (
    <div className={styles.wrapper__pagination}>
      <Pagination
        onChange={setValue}
        current={currentPage}
        total={totalPages}
      />
    </div>
  );
};

export default Paginations;
