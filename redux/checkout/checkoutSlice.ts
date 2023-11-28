import { Listing } from "@/typings/listing.typings";
import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CartState {
    cart: any[];
}

const initialState: CartState = {
    cart: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<any>) => {
            state.cart = [...state.cart, action.payload];
        },
        removeFromCart: (state, action: PayloadAction<any>) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id);
        },
        clearCart: (state) => {
            state.cart = [];
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export const selectCartState = (state: RootState) => state.cart.cart;

export const selectTotalCartPrice = createSelector(selectCartState, (cartItems) => {
    const cartTotalPrice = cartItems.reduce((total, item) => {
        const totalPricePerItem = item.price * item.dates.length;
        return total + totalPricePerItem;
    }, 0);

    return cartTotalPrice;
});

export default cartSlice.reducer;
