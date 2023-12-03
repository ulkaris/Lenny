import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counter/counterReducer';
import productReducer  from './reducers/screen-size/productList';
import elecsReducer from './reducers/filter/filterElecsReducer';
import placeReducer from './reducers/filterPlace/filterPlaceReducer';
import loadMoreReducer from './reducers/loadMore/loadMoreReducer';
import productViewReducer from './reducers/productDetail/productDetailReducer';
import cartReducer from './reducers/cartData/cartReducer';
import relatedReducer from './reducers/relatedProduct/relatedReducer';
import categoriesReducer from './reducers/categories/categoriesReducer';
import authReducer from './reducers/auth/authReducer';

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const cartPersist = {key: 'cart', storage}
const persistCartReducer = persistReducer(cartPersist, cartReducer)

const authPersist = {key: 'auth', storage}
const persistAuthReducer = persistReducer(authPersist, authReducer)

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productReducer,
    elecs: elecsReducer,
    place: placeReducer,
    loadmore: loadMoreReducer,
    productView: productViewReducer,
    cartData: persistCartReducer,
    related: relatedReducer,
    categories: categoriesReducer,
    auth: persistAuthReducer
  },
})

export const persistor = persistStore(store);