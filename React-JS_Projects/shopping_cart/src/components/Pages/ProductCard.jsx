import React from 'react'

const ProductCard = ({post}) => {
  return (
    <div
    key={post.id}
    className="bg-white p-4 rounded-md shadow-md hover:shadow-lg transition-shadow"
  >
    {/* Product Image */}
    <img
      src={post.image}
      alt={post.title}
      className="w-full h-48 object-cover rounded-md hover:scale-105 transition-transform"
    />
    {/* Product Title */}
    <h1 className="text-lg font-bold mt-2 line-clamp-2">
      {post.title}
    </h1>
    {/* Product Price */}
    <p className="text-gray-500 mt-1 text-sm">${post.price}</p>
  </div>
  )
}

export default ProductCard
