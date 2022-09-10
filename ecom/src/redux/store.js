
// import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./cartRedux";
// import userReducer from "./UserRedux";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig,userReducer);



// export const store = () => configureStore({
//   reducer:{
//     cart: cartReducer,
//     user: persistedReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//       getDefaultMiddleware({
//         serializableCheck: {
//           ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//         },
//       }),
// })


// export const persistor = persistStore(store);
import {configureStore , combineReducers} from '@reduxjs/toolkit'
import cartReducer from './cartRedux'
import userReducer from './AuthRedux'
import shippingReducer from './ShippingRedux'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage';

  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }

  const rootReducers = combineReducers({user:userReducer, cart:cartReducer , shipping:shippingReducer})
  
  const persistedReducer = persistReducer(persistConfig, rootReducers )

export const store = configureStore ({
 reducer:persistedReducer,
       middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
})


export let persistor = persistStore(store)