import { useState } from "react";
import Form from "./compnents/Form";
import Record from "./compnents/Record";
import "./App.css";
import MonthlyExpenseBar from "./compnents/MonthlyExpenseBar";

function App() {
  const [recordList, setRecordList] = useState([]);
  const [record, setRecord] = useState([
    {
      name: "",
      amount: "",
      date: "",
    },
  ]);
  const [yearList, setYearList] = useState([]);
  const [selectedYear, setSelectedYear] = useState("");
  const [dropdownYear, setDropdownYear] = useState("Choose year");
  const [showYearList, setShowYearList] = useState(false);

  const [monthlySums, setMonthlySums] = useState([]);
  const [maxSum, setMaxSum] = useState(0);

  const onChange = (updatedRecord) => {
    console.log(updatedRecord);
    setRecord(updatedRecord);
  };

  const sendData = (data) => {
    data.preventDefault();
    if (!yearList.includes(record.date.substring(0, 4))) {
      setYearList([...yearList, record.date.substring(0, 4)]); // this is to update the year list to choose from
    }

    const newRecord = {
      name: record.name,
      amount: record.amount,
      date: record.date,
    };

    setRecordList(prevRecordList => [...prevRecordList, newRecord]); // PROBLEM: it does not update the latest entry

    setRecord({
      name: "",
      amount: "",
      date: "",
    });
  };

  const setChart = (record) => {
    console.log(record)
    const year = record.date.substring(0,4)
    console.log(selectedYear)
    // setRecordList([...recordList, record]);
    if (selectedYear !=="" && year === selectedYear) {
      console.log(recordList)
      const filteredRecords = recordList.filter((item) =>
      item.date.startsWith(year)
    );
    console.log(filteredRecords)
    let sums = Array.from({ length: 12 }, () => 0);
    let max = 0;

    filteredRecords.forEach((record) => {
      const month = parseInt(record.date.split("-")[1], 10);
      sums[month - 1] += parseInt(record.amount);
    });

    max = Math.max(...sums);

    setMonthlySums(sums);
    setMaxSum(max);
    }
  }

  const chooseYear = (year) => {
    setSelectedYear(year);
    setDropdownYear(year);
    setShowYearList(false);
    const filteredRecords = recordList.filter((item) =>
      item.date.startsWith(year)
    );

    let sums = Array.from({ length: 12 }, () => 0);
    let max = 0;

    filteredRecords.forEach((record) => {
      const month = parseInt(record.date.split("-")[1], 10);
      sums[month - 1] += parseInt(record.amount);
    });

    max = Math.max(...sums);

    setMonthlySums(sums);
    setMaxSum(max);
  };

  const filteredRecordList = selectedYear
    ? recordList.filter((item) => item.date.startsWith(selectedYear)) // this is just to filter out the record list to display. not relevant to the chart
    : recordList;

  return (
    <div className="main">
      <Form record={record} sendData={sendData} onChange={onChange} setChart={setChart} />
      <div className="expenseResult">
        <div className="filterByYear">
          <p>Filter by year</p>
          <div
            className="dropdownYearList"
            onMouseEnter={() => setShowYearList(true)}
            onMouseLeave={() => setShowYearList(false)}
          >
            <button className="dropdownBtn">{dropdownYear}</button>
            <div className={`dropdownContent ${showYearList ? "show" : ""}`}>
              {yearList.map((item, index) => {
                return (
                  <button
                    className="dropdownYear"
                    key={index}
                    onClick={() => {
                      chooseYear(item);
                    }}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        <div className="expenseChart">
          {monthlySums.map((sum, index) => (
            <MonthlyExpenseBar
              sum={sum}
              key={index}
              maxSum={maxSum}
              index={index}
            />
          ))}
        </div>
        {filteredRecordList.map((item, index) => {
          return (
            <Record
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
