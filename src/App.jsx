import TheTitle from "./components/TheTitle";
import Dashboard from "./components/Dashboard";
import ExpensesList from "./components/ExpensesList";
import AddExpense from "./components/AddExpense";
import SearchInput from "./components/searchInput";

import { useEffect, useState } from "react";
function App() {
  const [budget, SetBudget] = useState(30);
  const [spent, setSpent] = useState(0);
  const [remaining, setRemaining] = useState(budget - spent);
  const [searchWord, setSearchWord] = useState("");


  const [Expenses, setExpense] = useState([
    {
      id: 0,
      name: "car",
      cost: 5,
    },
    {
      id: 1,
      name: "food",
      cost: 5,
    },
  ]);
  const [filteredExpenses, setFilteredExpenses] = useState([]);

  useEffect(() => {
    const newArr = Expenses.filter((e) => e.name.includes(searchWord));

    if (newArr.length == 0) {
      setFilteredExpenses([])
    } else {
      setFilteredExpenses(newArr);
    }
  }, [searchWord, Expenses]);

  useEffect(() => {
    setSpent(
      Expenses.length > 0 ? Expenses.reduce((acc, ex) => acc + ex.cost, 0) : 0
    );
  }, [Expenses, budget]);

  useEffect(() => {
    setRemaining(budget - spent);
  }, [spent]);
  const AddNewExpense = (name, cost) => {
    setExpense((prev) => [
      ...prev,
      {
        id: Expenses.length,
        name: name,
        cost: Number(cost),
      },
    ]);
  };

  const deleteExpense = (id) => {
    const NewArr = Expenses.filter((ex) => ex.id !== id);
    setExpense(NewArr);
  };
  return (
    <>
      <div className="p-4">
        <div>
          <TheTitle text="My Budget Planner" />
          <Dashboard budget={budget} remaining={remaining} spent={spent} />
        </div>

        <div>
          <TheTitle text="Expenses" />
          <SearchInput searchWord={searchWord} setSearchWord={setSearchWord} />

          <ExpensesList
            expenses={filteredExpenses}
            deleteExpense={deleteExpense}
          />
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
