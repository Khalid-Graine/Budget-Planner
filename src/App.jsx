import TheTitle from './components/TheTitle'

function App() {

  return (
    <>
     <div className='bg-gray-200 h-screen w-full p-2'>
      <div>
        <TheTitle text="My Budget Planner" />
        <div className='flex flex-col gap-2'>
          <div className='bg-blue-300 py-2 px-1'>
           <p>Budget: <span className='font-bold'>$2000</span></p>
          </div>
          <div className='bg-blue-300 py-2 px-1'>
           <p>Remaining: <span className='font-bold'>$1510</span></p>
          </div>
          <div className='bg-blue-300 py-2 px-1'>
           <p>Spent so far: <span className='font-bold'>$490</span></p>
          </div>
       
  
        </div>
      </div>
      <div>
      <TheTitle text="Expenses" />
       <form action="">
        <input type="text" />
       </form>
       <ul>
        <li className='flex justify-between'>
          <p>car</p>
          <div className='flex gap-2'>
            <p>10$</p>
            <button>X</button>
          </div>
        </li>
        <li className='flex justify-between'>
          <p>house</p>
          <div className='flex gap-2'>
            <p>10$</p>
            <button>X</button>
          </div>
        </li>
       </ul>
      </div>
      <div>
      <TheTitle text="Add Expense" />
       <form className='flex flex-col gap-2'>
       <div>
       <label >Name</label>
        <input type="text" />
       </div>
        
       <div>
       <label >Cost</label>
        <input type="text" />
       </div>
       </form>
      </div>
     </div>
    </>
  )
}

export default App
