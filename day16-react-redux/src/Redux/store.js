import { configureStore } from "@reduxjs/toolkit";
import counterSlicer from "./slicer";

export default configureStore({
  reducer: {
    counter: counterSlicer,
  },
});
