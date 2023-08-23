import { useContext } from 'react';
import { Context } from '../hooks/ExpenseTrackerContext';

const Banner = () => {
  const { expense, income } = useContext(Context);
  return (
    <div className="">
      <h1 className="text-2xl font-bold m-4 text-center">Expense Tracker</h1>
      <div className="uppercase font-semibold my-8">
        <p>your balance</p>
        <p className="text-3xl">${income + expense}</p>
      </div>
      <div className="flex py-4 px-8 shadow-md  font-bold bg-white">
        <div className="uppercase flex flex-col border-r-2 flex-1 text-center px-8">
          <span>income</span>
          <span className="text-green-500 text-xl">${income}</span>
        </div>
        <div className="uppercase flex flex-col flex-1 text-center px-8">
          <span>expense</span>
          <span className="text-red-500 text-xl">${expense}</span>
        </div>
      </div>
    </div>
  );
};
export default Banner;
