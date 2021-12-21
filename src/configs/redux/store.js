import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import RootReducer from './reducers/RootReducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { composeWithDevTools } from 'redux-devtools-extension';  

const persistConfig ={
    key: 'root',
    storage: storage,
    whitelist: ['user']
}
const persistedReducer = persistReducer(persistConfig, RootReducer)
export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
export const persistor = persistStore(store);
