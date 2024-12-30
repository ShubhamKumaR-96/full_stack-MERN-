import axios from "axios";
import React, { useEffect, useState } from "react";



const API_KEY="aIINKf0Pxb8MDhC2QPzTLbgvUXN6Uz7l"
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;


const useGifs = (tag) => {
  const [gifs, setGifs] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchGifs = async () => {
    setLoading(true)
    try {
      const response = await axios.get(tag ? `${url}&tag=${tag}` : url);
      const data=response.data.data.images.downsized.url
      setGifs(data);
      setLoading(false)
      
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchGifs();
  }, []);
  return { gifs, fetchGifs,loading };
};

export default useGifs;
