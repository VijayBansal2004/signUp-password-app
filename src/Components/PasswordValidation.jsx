import React from "react";
import { BsExclamationCircle } from "react-icons/bs";
const PasswordValidation = ({ letter, number, symbol, length }) => {
  return (
    <>
      <div className="validation-container d-flex gap-2 ">
        <BsExclamationCircle className="password-validation-icon" />

        <p className="mb-3">
          Password must contain a
          <span className={`fw-bold ${letter && "line-through"}`}>
            {" "}
            letter{" "}
          </span>
          , a{" "}
          <span className={`fw-bold ${symbol && "line-through"}`}>symbol </span>
          and a
          <span className={`fw-bold ${number && "line-through"}`}>
            {" "}
            number{" "}
          </span>
          , and be minimum of
          <span className={`fw-bold ${length && "line-through"}`}>
            {" "}
            8 Characters
          </span>
        </p>
      </div>
    </>
  );
};

export default PasswordValidation;
