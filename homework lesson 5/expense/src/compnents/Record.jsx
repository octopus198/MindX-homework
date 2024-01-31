import React from "react";

const Record = ({ name, amount, date }) => {
  const breakdownDate = new Date(date);
  return (
    <div className="record">
      <div className="record-dateAndName">
        <div className="record-date">
          <p className="breakdownDate">{breakdownDate.toLocaleString('default', { month: 'long' })}</p>
          <p className="breakdownDate">{breakdownDate.getFullYear()}</p>
          <p className="breakdownDate">{breakdownDate.getDate()}</p>
        </div>
        <p className="record-name">{name}</p>
      </div>
      <p className="record-amount">$ {amount}</p>
    </div>
  );
};

export default Record;
