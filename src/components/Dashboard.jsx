import Bar from "./Bar";
const Dashboard = ({ remaining,spent }) => {
  return (
    <div className="flex flex-col gap-2">
     <Bar text={'spent'} value={spent} />
     <Bar text={'remaining'} value={remaining} />
    </div>
  );
};
export default Dashboard;
