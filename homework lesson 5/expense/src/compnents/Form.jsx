import React from "react";
import { useState } from "react";

const Form = ({record, onChange, sendData, setChart}) => {
  const [flag, setFlag] = useState("true");
  const handleChange = (key) => {
    return (e) => {
        onChange({...record, [key] : e.target.value})
    }
  }
  const onSubmit = (data) => {
    console.log(data)
    sendData(data);
  }

  const setNewChart = (record) => {
    setChart(record)
  }

  return (
    <div>
      {flag ? (
        <div className="createFirstExpense">
          <button className="addFirstExpenseBtn" onClick={() => setFlag(!flag)}>ADD EXPENSE</button>
        </div>
      ) : (
        <div className="form">
          <form onSubmit={onSubmit}>
            <div className="inputField">
              <label className="inputLabel">Name</label>
              <input type="text" placeholder="Enter name here" value={record.name} onChange={handleChange("name")}/>
            </div>
            <div className="inputField">
              <label className="inputLabel">Amount</label>
              <input type="number" placeholder="Enter amount here" value={record.amount} onChange={handleChange("amount")} />
            </div>
            <div className="inputField">
              <label className="inputLabel">Date</label>
              <input type="date" value={record.date} onChange={handleChange("date")}/>
            </div>
            <div className="formBtns">
            <button className="addExpenseBtn" onClick={() => {setNewChart(record)}} >ADD</button>
            <button className="cancelExpenseBtn" onClick={() => {setFlag(!flag)}}>CANCEL</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Form;
