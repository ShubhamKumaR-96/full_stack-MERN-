import React, { useState } from "react";
import useGifs from "../hooks/useGifs";
import Spinner from "./Spinner";

const Tag = () => {
  const [tag, setTag] = useState("");
  const { gifs, fetchGifs, loading } = useGifs(tag);

  return (
    <div className="bg-blue-500 h-auto md:h-[50vh] rounded-lg border border-black flex flex-col items-center p-4">
      <h1 className="text-center font-bold text-xl underline">
        A {tag || "RANDOM"} GIF
      </h1>
      <div className="flex flex-col items-center mt-4 w-full">
        {loading ? (
          <Spinner />
        ) : (
          <img
            className="w-[80%] md:w-[40%] h-[25vh] object-cover rounded-lg"
            src={gifs}
            alt={tag || "random gif"}
          />
        )}
        <input
          type="text"
          placeholder="Enter a tag (e.g., laughing)"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          className="w-full md:w-[70%] max-w-xs bg-white p-2 mt-3 rounded-md border"
        />
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

export default Tag;
