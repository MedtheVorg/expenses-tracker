const Container = ({ children }) => {
  return (
    <div className="  mx-auto flex   w-full flex-col rounded-lg bg-white p-8 shadow-2xl">
      {children}
    </div>
  );
};
export default Container;
