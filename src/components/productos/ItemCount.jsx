import React, { useState } from "react";

const ItemCount = ({ initial }) => {
  const [count, setCount] = useState(initial);
  const restar = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const sumar = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div className="max-w-[60%] min-w-[300px] flex justify-around items-center bg-slate-800 rounded-md text-white">
        <button className="text-8xl" onClick={restar}>
          -
        </button>
        <span className="text-6xl">{count}</span>
        <button className="text-6xl" onClick={sumar}>
          +
        </button>
      </div>
    </>
  );
};

export default ItemCount;
