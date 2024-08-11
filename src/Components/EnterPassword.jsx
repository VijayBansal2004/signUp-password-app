import React from "react";
const EnterPassword = ({ password }) => {
  return (
    <>
      <label htmlFor="inputOne" className="mb-1">
        Your Password
      </label>
      <input
        type="text"
        name="inputOne"
        id="inputOne"
        placeholder="Password"
        className="w-100 mb-4 input-styles"
        onChange={(e) => {
          password(e);
        }}
      />
    </>
  );
};

export default EnterPassword;
