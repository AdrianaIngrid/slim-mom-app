import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./Auth/slice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 
const persistConfig = {
  key: "auth", // Cheia sub care starea este salvată
  storage,     // Folosește localStorage pentru salvare
  whitelist: ["user", "token", "isLoggedIn"], // Salvează doar aceste câmpuri
};
const persistedReducer = persistReducer(persistConfig, authReducer);

 const store = configureStore({
  reducer: {
    auth: persistedReducer,   
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Dezactivează verificările pentru Redux Persist
    }),
});
const persistor = persistStore(store);

export { store, persistor };