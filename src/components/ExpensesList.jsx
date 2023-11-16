import { MdDelete } from "react-icons/md";
import MessageError from "./MessageError";
const ExpensesList = ({ expenses,deleteExpense }) => {
  return (
    <div>
      {expenses.length == 0 && (
           <MessageError error={'There is no result'} />
          )}
          
      <ul className="flex flex-col gap-1">
        { expenses && expenses.map((expense) => (
          <li key={expense.id} className='flex justify-between items-center bg-red-100 p-2 rounded-sm'>
            <p>{expense.name}</p>
            <div className='flex gap-2'>
              <p>{expense.cost}$</p>
              
               <MdDelete onClick={() => deleteExpense(expense.id)} className="hover:text-red-600 hover:cursor-pointer text-2xl" />
             
            </div>
          </li>
        ))}
        
      </ul>
    </div>
  );
};

export default ExpensesList;
