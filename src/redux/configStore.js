import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import thunk from 'redux-thunk';

import usersReducer from './slices/usersSlice';
import productReducer from './slices/productSlice';
import cartReducer from './slices/cartSlice';

const rootPersistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
    // persist
    whitelist: ['cart'],
    // not persist
    blacklist: ['users', 'product'],
};

const usersPersistConfig = {
    key: 'users',
    storage,
    stateReconciler: autoMergeLevel2,
    // persist
    whitelist: ['favoriteList'],
};

const rootReducer = combineReducers({
    users: persistReducer(usersPersistConfig, usersReducer),
    product: productReducer,
    cart: cartReducer
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    // notify to the redux-persist library !important
    middleware: [thunk]
});

// delay the rendering of an app’s UI until the persisted data is available in the Redux store 
export const persistor = persistStore(store);