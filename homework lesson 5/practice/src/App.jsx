import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import CreateFirstExpense from "./components/CreateFirstExpense";
import { Records } from "./components/Records";

function App() {
  const [user, setUser] = useState({
    name: "",
    amount: "",
    date: "",
  });

  const [displayForm, setDisplayForm] = useState("none");
  const [displayCreateExpense, setDisplayCreateExpense] = useState("block");

  const [recordList, setRecordList] = useState([]);

  const onChange = (updatedInfo) => {
    console.log(updatedInfo);
    setUser(updatedInfo);
  };

  const createFirstExpense = () => {
    setDisplayForm(displayForm === "none" ? "block" : "none");
    setDisplayCreateExpense(displayCreateExpense === "none" ? "block" : "none");
  };

  const cancelCreateExpense = () => {
    setDisplayCreateExpense(displayCreateExpense === "none" ? "block" : "none");
    setDisplayForm(displayForm === "none" ? "block" : "none");
  };

  const formData = (data) => {
    setRecordList([...recordList, user]);
    data.preventDefault();
  };

  return (
    <div>
      <Form
        user={user}
        onChange={onChange}
        formData={formData}
        cancelCreateExpense={cancelCreateExpense}
        displayForm={displayForm}
      />
      <CreateFirstExpense
        createFirstExpense={createFirstExpense}
        displayCreateExpense={displayCreateExpense}
      />

      <div className="recordList">
        <div className="filterByYear">
          <p>Filter by year</p>
          <button className="filterButton">Filter</button>
        </div>
        {recordList.map((item, index) => {
          return (
            <Records
              key={index}
              name={item.name}
              amount={item.amount}
              date={item.date}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
