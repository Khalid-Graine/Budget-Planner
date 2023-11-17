import TheTitle from "./components/TheTitle";
import Dashboard from "./components/Dashboard";
import ExpensesList from "./components/ExpensesList";
import AddExpense from "./components/AddExpense";
import SearchInput from "./components/searchInput";
import EditBudget from "./components/EditBudget";

import { useEffect, useState } from "react";
function App() {

  

  const [budget, setBudget] = useState(30);
  const [spent, setSpent] = useState(0);
  const [remaining, setRemaining] = useState(budget - spent);
  const [searchWord, setSearchWord] = useState("");
  const [Expenses, setExpense] = useState([]);





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
  }, [spent,budget]);

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
    setExpense(Expenses.filter((ex) => ex.id !== id));
  };

  return (
    <>
      <div className="p-1  border md:my-2 md:w-6/12 mx-auto rounded-sm">
        <div>
          <TheTitle text="My Budget Planner" />
          <EditBudget budget={budget} setBudget={setBudget}  />
          <Dashboard  remaining={remaining} spent={spent}  />
        </div>

        <div>
          <TheTitle text="Expenses" />
          <SearchInput searchWord={searchWord} setSearchWord={setSearchWord} />

          <ExpensesList
            expenses={filteredExpenses}
            deleteExpense={deleteExpense}
            budget={budget}
          />
        </div>

        <div>
          <TheTitle text="Add Expense" />
          <AddExpense AddNewExpense={AddNewExpense} remaining={remaining} />
        </div>

       
      </div>
    </>
  );
}

export default App;
