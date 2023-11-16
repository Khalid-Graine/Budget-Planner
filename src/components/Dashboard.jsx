const Dashboard = ({ info }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="bg-blue-300 py-2 px-1">
        <p>
          Budget: <span className="font-bold">${info.Budget}</span>
        </p>
      </div>
      <div className="bg-blue-300 py-2 px-1">
        <p>
          Remaining: <span className="font-bold">${info.Remaining}</span>
        </p>
      </div>
      <div className="bg-blue-300 py-2 px-1">
        <p>
          Spent so far: <span className="font-bold">${info.Spent}</span>
        </p>
      </div>
    </div>
  );
};
export default Dashboard;
