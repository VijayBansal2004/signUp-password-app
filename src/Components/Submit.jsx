import React from "react";

const Submit = ({ letter, number, symbol, length }) => {
  return (
    <>
      <button
        type="button"
        className={`btn w-100 ${
          letter && number && symbol && length === true
            ? "btn-primary"
            : "btn-secondary"
        }`}
      >
        Continue
      </button>
    </>
  );
};

export default Submit;
