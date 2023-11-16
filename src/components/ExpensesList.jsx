const ExpensesList = () => {
  return (
    <div>
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
  )
}
export  default ExpensesList;