import { configureStore } from '@reduxjs/toolkit';

import usersSlice from './slices/usersSlice';
import productSlice from './slices/productSlice';

export const store = configureStore({
    reducer: {
        usersSlice,
        productSlice
    },
});