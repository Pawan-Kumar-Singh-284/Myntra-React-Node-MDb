import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
    name: "items",
    initialState: [],
    reducers: {
      addInitialItems: (state, action) => {
        // console.log(store, action,"reducer")
        return action.payload;
      },
    },
  });
export const itemActions=itemSlice.actions;
  export default itemSlice;