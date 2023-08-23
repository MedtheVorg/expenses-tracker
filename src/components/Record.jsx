const Record = (props) => {
  const { label, cost, type } = props;
  return (
    <li className="w-full h-full shadow-md flex items-stretch justify-between font-semibold  ">
      <div className="flex items-center justify-between flex-1 px-4">
        <p className="capitalize">{label}</p>
        <p> {cost}</p>
      </div>
      <div
        className={`w-[5px] h-[40px]  bg-${type ? 'green' : 'red'}-500`}
      ></div>
    </li>
  );
};
export default Record;
