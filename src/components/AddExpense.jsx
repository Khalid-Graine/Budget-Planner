import { useState } from "react";

const AddExpense = ({AddNewExpense}) => {
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  const [error,setError] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (name === '') {
      setError('Please, add the name of the expense');
    } else if (cost === '') {
      setError('Please, add the cost of the expense');
    } else {
      setError(null);
      AddNewExpense(name, cost);
  
      // Reset the form fields to empty strings
      setName('');
      setCost('');
    }
  };
  

    return ( 
        
        <div>
          <div className="text-red-400">{error}</div>
          <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col gap-2'>
       <div>
       <label >Name</label>
       <pre />
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="border w-full"/>
       </div>
        
       <div>
       <label >Cost</label>  <pre />
        <input 
        type="number"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
        className="border w-full"
        />
       </div>

       <button  className="bg-blue-400 p-2">Add</button>
       </form>
        </div>
     );
}
 
export default AddExpense ;