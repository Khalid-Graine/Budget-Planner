const Bar = ({ text, value }) => {
  return (
    <div className="bg-blue-100 py-2 px-1 flex justify-between ">
      <p>{text}:</p>
      <span className="font-bold">${value}</span>
    </div>
  );
};

export default Bar;
