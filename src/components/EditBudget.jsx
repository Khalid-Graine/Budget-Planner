const EditBudget = ({budget,setBudget}) => {
    return ( 
        <div>
            <form   className=" my-2">
              <input type="text" onChange={(e) => setBudget(e.target.value)} value={budget} className="x-input" />
             
            </form>
          </div>
     );
}
 
export default EditBudget;