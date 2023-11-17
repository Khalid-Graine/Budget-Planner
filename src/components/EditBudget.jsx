const EditBudget = ({budget,setBudget}) => {
    return ( 
        <div>
            <form   className=" my-2">
              <input type="text" onChange={(e) => setBudget(e.target.value)} value={budget} className="border w-full  pl-1" />
             
            </form>
          </div>
     );
}
 
export default EditBudget;