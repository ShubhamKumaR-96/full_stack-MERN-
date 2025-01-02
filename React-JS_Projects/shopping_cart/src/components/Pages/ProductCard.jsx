import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { removeToCart } from '../../redux/slices/cartSlice';

const ProductCard = ({post ,idx}) => {

  const [inCart, setInCart] = useState(false);

  const dispatch=useDispatch()

  const handleCartToggle = () => {
    if(inCart){
      dispatch(removeToCart(post))
    }else{
      dispatch(addToCart(post))
    }
    setInCart(!inCart);
  }
  
  return (
    <div
    key={idx}
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
   <div>
   <button onClick={handleCartToggle} className={`mt-4 w-full py-2 bg-blue-500 text-white rounded-md ${inCart ? "bg-red-500" : "bg-blue-500"}`}>
    {inCart ? "Remove from Cart" : "Add to Cart"}
   </button>

   </div>
  </div>
  )
}

export default ProductCard
