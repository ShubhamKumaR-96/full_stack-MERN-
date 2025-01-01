import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQty: 0,
    totalAmount: 0,
  },
  reducers: {
    addToCart: (state, action) => {},
    removeToCart: (state, action) => {},
  },
});

export const {addToCart,removeToCart}=CartSlice.actions
export default CartSlice.reducer
