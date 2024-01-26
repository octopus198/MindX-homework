import React from "react";

const Form = ({ user, onChange, displayForm, cancelCreateExpense }) => {
  const onChangeInput = (key) => {
    return (e) => {
      onChange({ ...user, [key]: e.target.value });
    };
  };

  const onSubmit = (data) => {
    data.preventDefault();
    alert(JSON.stringify(user));
  };

  return (
    <section className="addExpense" style={{display: displayForm}}>
    <div className="form">
      <form id="form" onSubmit={onSubmit}>
        <div className="name">
          <label>Name</label>
          <input
          type="text"
          placeholder="Enter name here..."
            id="input"
            value={user.name}
            onChange={onChangeInput("name")}
          />
        </div>
        <div className="password">
          <label>Amount</label>
          <input
          placeholder="Enter amount here..."
          type="number"
            id="input"
            value={user.amount}
            onChange={onChangeInput("amount")}
          />
        </div>
        <div className="date">
          <label>Date</label>
          <input
          type="date"
            id="input"
            value={user.date}
            onChange={onChangeInput("date")}
          />
        </div>
      </form>
      <div className="createExpenseButtons">
      <button type="sumbit" className="submitButton">ADD</button>
      <button className="cancelCreateExpense" onClick={cancelCreateExpense}>CANCEL</button>
      </div>
    </div>
    </section>
  );
};

export default Form;
