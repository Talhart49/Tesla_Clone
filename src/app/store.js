import { configureStore } from "@reduxjs/toolkit";
import carReducer from "../components/features/car/carSlice";

export const Store = configureStore({
  reducer: {
    car: carReducer,
  },
});
