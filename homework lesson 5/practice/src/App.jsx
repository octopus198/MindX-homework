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
  const [displayCreateExpense, setDisplayCreateExpense] = useState("block")

  const record = {};
  
  const onChange = (updatedInfo) => {
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

  console.log(user);

  return (
    <div>
      <Form user={user} onChange={onChange} cancelCreateExpense={cancelCreateExpense} displayForm={displayForm} />
      <CreateFirstExpense createFirstExpense={createFirstExpense} displayCreateExpense={displayCreateExpense} />
      <div className="recordList">
      <div className="filterByYear"> 
        <p>Filter by year</p>
        <button>Filter</button>
      </div>
      <Records />
    </div>
    </div>
  );
}

export default App;
