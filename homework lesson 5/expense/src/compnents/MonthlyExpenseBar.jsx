import React, { useState } from "react";

const MonthlyExpenseBar = ({ sum, maxSum, index }) => {

  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthName = month[index]
  console.log(monthName)
  return (
    <div className="bar">
      <div className="bar-border" key={index}>
        <div
          className="bar-content"
          style={{ width: "20px", height: `${(sum / maxSum) * 140}px` }}
        ></div>
      </div>
      <p className="chartMonth">{monthName}</p>
    </div>
  );
};

export default MonthlyExpenseBar;
