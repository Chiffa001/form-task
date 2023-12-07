import { configureStore } from "@reduxjs/toolkit";
import { apiMiddleware, reducer, reducerPath } from "./api";

export const store = configureStore({
    reducer: {
        [reducerPath]: reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiMiddleware),
});
