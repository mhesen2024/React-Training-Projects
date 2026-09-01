import { createSlice } from "@reduxjs/toolkit";

const intialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: intialState,
  reducers: {
    addItem(state, action) {
      const { pizzaId, quantity } = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.pizzaId === pizzaId,
      );
      if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.totalPrice = existingItem.unitPrice * existingItem.quantity;
      } else {
        state.cartItems.push({...action.payload,totalPrice:action.payload.unitPrice,quantity:1});
      }
    },
    removeItem(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.pizzaId !== action.payload,
      );
    },
    increaseItemQuantity(state, action) {
      const item = state.cartItems.find(
        (item) => item.pizzaId === action.payload,
      );
      item.quantity++;
      item.totalPrice = item.unitPrice * item.quantity;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cartItems.find(
        (item) => item.pizzaId === action.payload,
      );
      item.quantity--;
      item.totalPrice = item.unitPrice * item.quantity;
    },
    clearCart(state) {
      state.cartItems = [];
    },
  },
});

export const {
  addItem,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;


export const getTotalPrice = (state)=> {
  return state.cart.cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
}

export const getTotalQuntity = (state)=> {
  return state.cart.cartItems.reduce((acc, item) => acc + item.quantity, 0);
}

export const getCurrentyQuntity = (pizzaId)=>(state)=>{
  return state.cart.cartItems.find((item)=>item.pizzaId === pizzaId)?.quantity ||null;
}
