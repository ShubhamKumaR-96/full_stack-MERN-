import React from "react";
import useGifs from "../hooks/useGifs";
import Spinner from "./Spinner";

const Random = () => {
  const { gifs, fetchGifs, loading } = useGifs();
  return (
    <div className="bg-green-700 h-auto md:h-[50vh] p-4  rounded-lg border border-black flex flex-col items-center">
      <h1 className="text-center font-bold text-lg md:text-xl underline">
        A RANDOM GIF
      </h1>
      <div className="flex flex-col items-center mt-4 w-full">
        {loading ? (
          <Spinner />
        ) : (
          <img
            className="w-[80%] md:w-[40%] h-[32vh] object-cover rounded-lg  "
            src={gifs}
            alt="gif"
          />
        )}
        <button
          onClick={() => fetchGifs()}
          className="w-full md:w-[70%] max-w-xs bg-green-300 p-2 mt-3 rounded-md hover:bg-green-400"
        >
          GENERATE
        </button>
      </div>
    </div>
  );
};

export default Random;
