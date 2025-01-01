import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import axios from "axios";
import ProductCard from "./ProductCard";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch posts data from the API
  async function fetchPosts() {
    setLoading(true);
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setPosts(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setLoading(false); // Ensure loading spinner stops on error
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="p-4 w-[60%] mx-auto">
      {loading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 hover:shadow-lg transition-shadow">
          {posts.map((post) => (
           <ProductCard post={post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
