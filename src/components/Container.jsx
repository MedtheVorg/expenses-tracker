const Container = ({ children }) => {
  return (
    <div className=" mx-auto flex  max-w-[500px] flex-col p-16  shadow-2xl ">
      {children}
    </div>
  );
};
export default Container;
