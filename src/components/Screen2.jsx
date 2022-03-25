import React from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Screen2 = () => {
  const location = useLocation();
  const history = useHistory();
  const { userName, email, phoneNum } = (location && location.state) || {};

  const handleBack = () => {
    history.push({
      pathname: "/",
      state: {
        userName,
        email,
        phoneNum
      }
    });
  };

  return (
    <>
      <h1>Screen 2</h1>
      <button onClick={handleBack}>Back to Screen1</button>
      <div>{userName && userName}</div>
      <div>{email && email}</div>
      <div>{phoneNum && phoneNum}</div>
    </>
  );
};

export default Screen2;
