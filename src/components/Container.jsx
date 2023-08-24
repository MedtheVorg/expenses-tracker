const Container = ({ children }) => {
  return (
    <div className=" mx-auto flex  flex-col p-16 shadow-2xl  lg:max-w-[80%] ">
      {children}
    </div>
  );
};
export default Container;
