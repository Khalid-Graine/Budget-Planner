const AddExpense = () => {
    return ( 
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
     );
}
 
export default AddExpense ;