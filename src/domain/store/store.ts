import { configureStore } from "@reduxjs/toolkit";
import { CurriedGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { petsSlice } from "./slices/petsSlice";

export const store = configureStore({
  reducer: { pets: petsSlice.reducer },
  middleware: (getDefaultMiddleware: CurriedGetDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
