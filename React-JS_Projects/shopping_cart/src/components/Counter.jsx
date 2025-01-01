import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/slices/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch=useDispatch();

  const handleInc=()=>{
    dispatch(increment())
  }
  const handleDec=()=>{
    dispatch(decrement())
  }



  return (
    <div>
      <h1 className="text-center p-2 shadow-lg border-2 bg-zinc-300 border-black">{count}</h1>
      <button onClick={handleInc} className="bg-blue-500 text-white font-bold py-2 px-4 rounded m-2">
        Increment
      </button>
      <button onClick={handleDec} className="bg-red-500 text-white font-bold py-2 px-4 rounded m-2">
        Decrement
      </button>
    </div>
  );
};

export default Counter;
