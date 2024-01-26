import React from "react";

const CreateFirstExpense = ({ createFirstExpense, displayCreateExpense }) => {
  return (
    <div
      className="createFirstExpense"
      style={{ display: displayCreateExpense }}
    >
      <div className="firstExpenseButton">
        <button className="addNewExpense" onClick={createFirstExpense}>
          ADD NEW EXPENSE
        </button>
      </div>
    </div>
  );
};

export default CreateFirstExpense;
