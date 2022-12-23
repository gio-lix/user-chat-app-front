import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import authReducer from "./slices/authSlice";
import toastReducer from "./slices/toastReducer";
import usersReducer from "./slices/usersSlice";
import currentUserToChatSlice from "./slices/currentUserToChat";
import messagesReducer from "./slices/messagesSlice";
import socketReducer from "./slices/socketSlice";
import globalReducer from "./slices/globalSlice";


const RootReducer = combineReducers({
    auth: authReducer,
    users: usersReducer,
    toast: toastReducer,
    chatToUser: currentUserToChatSlice,
    messages: messagesReducer,
    socket: socketReducer,
    global: globalReducer
})

export const store = configureStore({
    reducer: RootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;


export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector
export default store