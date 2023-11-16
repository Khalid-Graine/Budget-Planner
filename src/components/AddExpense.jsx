import { useState } from "react";
import MessageError from "./MessageError";

const AddExpense = ({ AddNewExpense, remaining }) => {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (name === "") {
      setError("Please enter the name of the expense.");
    } else if (cost === "") {
      setError("Please enter the cost of the expense.");
    } else {
      if (cost > remaining) {
        setError(`The cost of the expense ($${cost}) exceeds your remaining budget of $${remaining}. Please adjust.`);
      } else {
        setError(null);
        AddNewExpense(name, cost);
        // Reset the form fields to empty strings
        setName("");
        setCost("");
      }
    }
  };
  

  return (
    <div>
     
      <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-2">
        <div>
          <label>Name</label>
          <pre />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border w-full"
          />
        </div>

        <div>
          <label>Cost</label> <pre />
          <input
            type="number"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            className="border w-full"
          />
        </div>
        
         <div>
         <MessageError error={error} />
         </div>

        <button className="bg-blue-400 p-2">Add</button>
      </form>
    </div>
  );
};

export default AddExpense;
