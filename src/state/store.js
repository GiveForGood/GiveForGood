import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userData/userDataSlice";

export default configureStore({
  reducer: {
    userData: userSlice,
  },
});
