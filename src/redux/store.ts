import { myApi } from './api/myApi';
import { configureStore } from "@reduxjs/toolkit";
import crossedSlice from './slices/crossedSlice';
import cartSlice from './slices/cartSlice';
import { persistStore, 
        persistReducer,
        FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers} from "@reduxjs/toolkit"; 
 // defaults to localStorage for web
 
const rootReducer = combineReducers({
    [myApi.reducerPath]: myApi.reducer,
    crossed: crossedSlice,
    cart:cartSlice
})
 
const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)
 

export const store = configureStore({
    reducer:persistedReducer,
    middleware : (getDefaultMiddleWare) => getDefaultMiddleWare({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(myApi.middleware)
})

export const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself

export type RootState = ReturnType<typeof store.getState> 
export type AppDispatch = typeof store.dispatch