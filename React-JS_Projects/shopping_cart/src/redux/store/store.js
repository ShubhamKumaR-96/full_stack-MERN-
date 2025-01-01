import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../slices/counterSlice";
import CartSlice from "../slices/cartSlice";

export const store = configureStore({
  reducer: {
    counter: CounterSlice,
    cart: CartSlice,
  },
});
