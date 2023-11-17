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
      <form className="my-2">
        <input
          type="text"
          onChange={(e) => handleInputChange(e)}
          value={budget}
          className="x-input"
          onKeyDown={(e) => handleInputChange(e)}
        />
      </form>
    </div>
  );
};

export default EditBudget;
