import { createSlice } from "@reduxjs/toolkit";


export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQty: 0,
    totalAmount: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const index = state.items.findIndex((i) => i.id === item.id);
      if (index >= 0) {
        state.items[index].qty += 1;
        state.totalQty += 1;
        state.totalAmount += item.price;
      } else {
        state.items.push({ ...item, qty: 1 });
        state.totalQty += 1;
        state.totalAmount += item.price;
      }
    },
    removeToCart: (state, action) => {
      const item = action.payload;
      const index = state.items.findIndex((i) => i.id === item.id);
      if (state.items[index].qty === 1) {
        state.totalQty -= 1;
        state.totalAmount -= state.items[index].price;
        state.items = state.items.filter((i) => i.id !== item.id);
      } else {
        state.items[index].qty -= 1;
        state.totalQty -= 1;
        state.totalAmount -= state.items[index].price;
      }
    }
},
});

export const { addToCart, removeToCart } = CartSlice.actions;
export default CartSlice.reducer;
