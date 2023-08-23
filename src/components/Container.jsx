const Container = ({ children }) => {
  return (
    <div className=" max-w-[500px] mx-auto  p-16 flex flex-col  shadow-lg ">
      {children}
    </div>
  );
};
export default Container;
