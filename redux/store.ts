import { configureStore } from "@reduxjs/toolkit";
import checkoutReducer from "./checkout/checkoutSlice";
import searchReducer from "./filter/filterSlice";

export const store = configureStore({
    reducer: {
        cart: checkoutReducer,
        search: searchReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
