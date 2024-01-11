import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";
import statusSlice from "./statusSlice";
import bagSlice from "./bagSlice";



const myntraStore = configureStore({
  reducer: {
    items: itemSlice.reducer,
    fetchStatus:statusSlice.reducer,
    bag:bagSlice.reducer,
  },
});

export default myntraStore;
