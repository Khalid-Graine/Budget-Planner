const ExpensesList = ({ expenses }) => {
  return (
    <div>
      <ul className="flex flex-col gap-1">
        {expenses.map((expense) => (
          <li key={expense.Name} className='flex justify-between bg-red-300 p-2 rounded-sm'>
            <p>{expense.Name}</p>
            <div className='flex gap-2'>
              <p>{expense.Cost}$</p>
              <button>X</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpensesList;
