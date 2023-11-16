import TheTitle from './components/TheTitle'
import  Dashboard  from './components/Dashboard'
import ExpensesList from './components/ExpensesList'
import AddExpense from './components/AddExpense'
function App() {
 

  return (
    <>
     <div className='bg-gray-200 h-screen w-full p-2'>


      <div>
        <TheTitle text="My Budget Planner" />
        <Dashboard />
      </div>


      <div>
      <TheTitle text="Expenses" />
       <form action="">
        <input type="text" />
       </form>
      <ExpensesList />
      </div>


      <div>
      <TheTitle text="Add Expense" />
       <AddExpense />
      </div>



     </div>
    </>
  )
}

export default App
