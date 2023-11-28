import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface SearchState {
    search: string;
    category: string;
}

const initialState: SearchState = {
    search: "",
    category: "",
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        setCategory: (state, action: PayloadAction<string>) => {
            state.category = action.payload;
        },
    },
});

export const { setSearch, setCategory } = filterSlice.actions;

export const selectSearchState = (state: RootState) => state.search.search;

export const selectCategoryState = (state: RootState) => state.search.category;

export default filterSlice.reducer;
