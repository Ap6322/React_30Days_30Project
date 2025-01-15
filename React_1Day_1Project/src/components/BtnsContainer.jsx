import React from "react";
import styles from "./BtnsContainer.module.css";

const BtnsContainer = ({onClickHandler}) => {
  const btnsName = [
    "C",
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "*",
    "/",
    "0",
    "=",
    "DEL",
    ".",
    "%"

  ];
  return (
    <div className={styles.btnsContainer}>
      {btnsName.map((btn) => (
        <button className={styles.btns} value={btn} onClick={onClickHandler}>{btn}</button>
      ))}
    </div>
  );
};

export default BtnsContainer;
