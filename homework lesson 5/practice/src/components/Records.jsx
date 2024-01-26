import React from "react";

export const Records = ({ name, amount, date }) => {
  return (
    <div className="record">
      <div className="recordDateAndName">
        <div className="recordDate">
          <p className="dateMonth">{date.substring(5, 7)}</p>
          <p className="dateYear">{date.substring(0, 4)}</p>
          <p className="dateDay">{date.substring(8)}</p>
        </div>
        <p className="recordName">{name}</p>
      </div>
      <p className="recordAmount">$ {amount}</p>
    </div>
  );
};
