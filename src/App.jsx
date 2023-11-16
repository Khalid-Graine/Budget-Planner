import TheTitle from "./components/TheTitle";
import Dashboard from "./components/Dashboard";
import ExpensesList from "./components/ExpensesList";
import AddExpense from "./components/AddExpense";
import { useState } from "react";
function App() {
  const [Budget, SetBudget] = useState({
    Budget: "2000",
    Remaining: "1510",
    Spent: "490",
  });
  const [Expenses, setExpense] = useState([
    {
      id: 0,
      name: "car",
      cost: 10,
    },
    {
      id: 1,
      name: "food",
      cost: 145,
    },
  ]);

  const AddNewExpense = (name, cost) => {
    setExpense((prev) => [
      ...prev,
      {
        id: Expenses.length,
        name: name,
        cost: cost,
      },
    ]);
  };

  return (
    <>
      <div className="bg-gray-200 h-screen w-full p-4">
        <div>
          <TheTitle text="My Budget Planner" />
          <Dashboard info={Budget} />
        </div>

        <div>
          <TheTitle text="Expenses" />
          <form action="">
            <input type="text" />
          </form>
          <ExpensesList expenses={Expenses} />
        </div>

        <div>
          <TheTitle text="Add Expense" />
          <AddExpense AddNewExpense={AddNewExpense} />
        </div>
      </div>
    </>
  );
}

export default App;
