import React from "react";
import date from "../assets/logo/date.png";
import "./cardInfo.css";
import edit from "../assets/logo/edit.png";
import del from "../assets/logo/del.png";

const CardInfo = ({
  info,
  setId,
  id,
  setDataUpdate,
  setUpdate,
  setIdUpdate,
}) => {
  return (
    <div className="card-container">
      <div className="card-info-container">
        <h3>
          {info.name} {info.lastName}
        </h3>
        <span>{info.email}</span>
        <div className="card-logo-date">
          <img src={date} alt="logoDate" />
          <span>{info.date}</span>
        </div>
      </div>

      <div className="card-button-container">
        <button>
          <img
            src={edit}
            alt="logoEdit"
            onClick={() => {
              setDataUpdate(info);
              setUpdate(true);
              setIdUpdate(id);
            }}
          />
        </button>
        <button
          className="card-button-container-del"
          onClick={() => {
            setId(id);
          }}
        >
          <img src={del} alt="logoDel" />
        </button>
      </div>
    </div>
  );
};

export default CardInfo;
