import axios from "axios";
import { createContext, useState } from "react";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [page, totalPages] = useState(null);

  const fetchBlogsData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://www.reddit.com/r/askprogramming.json"
      );
      const posts = response.data.data.children;

      console.log(posts); // Posts are inside `children` array

    //   https://www.reddit.com/r/AskProgramming/comments/120de2q/chatgpt_ai_related_questions/
      // Array of objects with required data
      const blogPosts = posts.reduce((acc, post) => {
        const { title, author, created_utc, selftext,permalink, thumbnail } = post.data;
        acc.push({ title, selftext, created_utc, author, thumbnail,permalink });
        return acc;
      }, []); // Initialize `acc` as an empty array

      console.log(blogPosts);
      setBlogs(blogPosts);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching Reddit data:", error);
    }
  };

  return (
    <BlogContext.Provider
      value={{ blogs, loading, currentPage, totalPages, fetchBlogsData }}
    >
      {children}
    </BlogContext.Provider>
  );
};
