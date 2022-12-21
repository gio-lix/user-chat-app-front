import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import authSlice from "./slices/authSlice";
import toastReducer from "./slices/toastReducer";
import usersSlice from "./slices/usersSlice";
import currentUserToChatSlice from "./slices/currentUserToChat";


const RootReducer = combineReducers({
    auth: authSlice,
    users: usersSlice,
    toast: toastReducer,
    chatToUser: currentUserToChatSlice,
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