import React from "react";

const Container = ({ children, ...props }) => {
  return (
    <div
      className="px-4 max-w-7xl w-full flex flex-col items-center justify-center "
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
