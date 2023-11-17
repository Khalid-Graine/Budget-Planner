import { MdDelete } from "react-icons/md";
import MessageError from "./MessageError";

const ExpensesList = ({ expenses, deleteExpense, budget }) => {
  let bgColorClass;
  let expensePercentage;

  const GetColor = (expense) => { 
    expensePercentage = (expense.cost / budget) * 100;
  
    if (expensePercentage >= 70) {
      bgColorClass = 'bg-red-500';
    } else if  (expensePercentage >= 60) {
      bgColorClass = 'bg-red-500';
    } else if  (expensePercentage >= 50) {
      bgColorClass = 'bg-red-500';
    } else if 
     (expensePercentage >= 40) {
      bgColorClass = 'bg-red-500';
    } else if  (expensePercentage >= 30) {
      bgColorClass = 'bg-red-500';
    } else if (expensePercentage >= 20) {
      bgColorClass = 'bg-red-300';
    } else if (expensePercentage >= 10) {
      bgColorClass = 'bg-red-200';
    } else {
      bgColorClass = 'bg-red-100';
    }

    return bgColorClass
  }
  
 

  return (
    <div>
      {expenses.length === 0 && (
        <MessageError error={'There is no result'} />
      )}

      <ul className="flex flex-col gap-1">
        {expenses &&
          expenses.map((expense) => {
           
            return (
              <li
                key={expense.id}
                className={`flex justify-between items-center p-2 rounded-sm border ${ GetColor(expense)}`}
              >
                <p>{expense.name}</p>
                <div className="flex gap-2">
                  <p>{expense.cost}$</p>
                  <MdDelete
                    onClick={() => deleteExpense(expense.id)}
                    className="hover:text-red-600 hover:cursor-pointer text-2xl"
                  />
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ExpensesList;
