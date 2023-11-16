 const Dashboard = () => {
  return (
    <div className='flex flex-col gap-2'>
          <div className='bg-blue-300 py-2 px-1'>
           <p>Budget: <span className='font-bold'>$2000</span></p>
          </div>
          <div className='bg-blue-300 py-2 px-1'>
           <p>Remaining: <span className='font-bold'>$1510</span></p>
          </div>
          <div className='bg-blue-300 py-2 px-1'>
           <p>Spent so far: <span className='font-bold'>$490</span></p>
          </div>
        </div>
  )
}
export default Dashboard;
