import React, { useContext, useEffect } from "react";
import { BlogContext } from "../context/BlogContext";

const Blog = () => {
  const { blogs, fetchBlogsData } = useContext(BlogContext);

  useEffect(() => {
    fetchBlogsData();
  }, []);

  return (
    <div className=" w-full p-4 flex flex-col items-center pt-16 bg-gray-100">
   
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg border border-gray-300 p-4 flex flex-col hover:shadow-lg transition duration-300"
          >
            {/* Thumbnail */}
            {blog.thumbnail && blog.thumbnail.startsWith("http") && (
              <img
                src={blog.thumbnail}
                alt={blog.title}
                className="w-full h-48 object-cover rounded-md mb-3"
              />
            )}
            {/* Title */}
            <h2 className="text-lg font-semibold mb-2">{blog.title}</h2>
            {/* Author */}
            <p className="text-sm text-gray-600 mb-1">
              <strong>Author:</strong> {blog.author}
            </p>
            {/* Date */}
            <p className="text-sm text-gray-500 mb-2">
              <strong>Posted:</strong>{" "}
              {new Date(blog.created_utc * 1000).toLocaleDateString()}
            </p>
            {/* Selftext */}
            {blog.selftext && (
              <p className="text-gray-700 text-sm line-clamp-3 mb-3">
                {blog.selftext}
              </p>
            )}
            {/* Read More Button */}
            {blog.selftext && blog.selftext.length > 100 && (
              
              <button className="text-blue-500 text-center text-sm font-medium mt-auto">
                <a href={`https://www.reddit.com/${blog.permalink}`} >Read More </a>
              </button>
             
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
