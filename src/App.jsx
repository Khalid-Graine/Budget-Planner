import TheTitle from "./components/TheTitle";
import Dashboard from "./components/Dashboard";
import ExpensesList from "./components/ExpensesList";
import AddExpense from "./components/AddExpense";
import { useEffect, useState } from "react";
function App() {
  const [budget,SetBudget] = useState(30)
  const [spent,setSpent] = useState(0)
  const [remaining,setRemaining] = useState(budget - spent)
  
 


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
  useEffect(() => {
  setSpent(
    Expenses.reduce((acc, ex) => acc + ex.cost, 0)
    );

 
   },[Expenses,budget])
  
   useEffect(() => {
    setRemaining(budget - spent);
   },[spent])
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

  const TotalExpenses = Expenses.reduce((to, cu) => {
    return to.cost + cu.cost;
  });

  return (
    <>
      <div className="p-4">
        <div>
          <TheTitle text="My Budget Planner" />
          <Dashboard budget={budget} remaining={remaining} spent={spent}/>
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
