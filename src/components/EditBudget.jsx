import React from "react";

const EditBudget = ({ budget, setBudget }) => {
  const handleInputChange = (e) => {
    const inputValue = e.target.value; 
    if (!isNaN(inputValue)) {
      setBudget(inputValue);
    } 
  };

  return (
    <div>
      <form className="my-2 flex gap-1 bg-blue-100 p-1">
        <label className="w-full">budget:</label>
        <input
          type="text"
          onChange={(e) => handleInputChange(e)}
          value={budget}
          className="w-20 text-center border"
          onKeyDown={(e) => handleInputChange(e)}
        />
      </form>
    </div>
  );
};

export default EditBudget;
