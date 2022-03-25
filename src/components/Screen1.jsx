import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

const Screen1 = () => {
  const history = useHistory();
  const location = useLocation();
  const { userName: uName, email: eMail, phoneNum: phNum } =
    (location && location.state) || {};

  const [userName, setUserName] = useState(uName ? uName : "");
  const [email, setEmail] = useState(eMail ? eMail : "");
  const [phoneNum, setPhoneNum] = useState(phNum ? phNum : "");

  const handleNext = () => {
    const formData = {};
    if (userName !== uName) {
      formData.userName = userName;
    }
    if (email !== eMail) {
      formData.email = email;
    }
    if (phoneNum !== phNum) {
      formData.phoneNum = phoneNum;
    }
    history.push({
      pathname: "/screen2",
      state: formData
    });
  };

  const handleSubmit = () => {
    history.push({
      pathname: "/screen2",
      state: {
        userName,
        email,
        phoneNum
      }
    });
  };

  return (
    <>
      <h2>Screen 1</h2>
      <label>User Name</label>{" "}
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <br />
      <br />
      <label>Email</label>{" "}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <label>Phone Number</label>{" "}
      <input
        type="text"
        value={phoneNum}
        onChange={(e) => setPhoneNum(e.target.value.replace(/\D/g, ""))}
        maxLength={10}
      />{" "}
      <br />
      <br />
      <button onClick={handleNext}>Next</button>{" "}
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default Screen1;
