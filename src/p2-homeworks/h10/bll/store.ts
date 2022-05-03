import {combineReducers, createStore } from "redux";
import {loadingReducer} from "./loadingReducer";
import {themeReducer} from "../../h12/bll/themeReducer";
import {ActionsHW13Types, isCheckedReducer} from "../../h13/isCheckedReducer";
import { applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import {ThunkDispatch} from "redux-thunk/es/types";
import {useDispatch} from "react-redux";

const reducers = combineReducers({
    loading: loadingReducer,
    colorTheme: themeReducer,
    hw13: isCheckedReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store; // for dev

export type AppActionType = ActionsHW13Types
// export type AppDispatch = typeof store.dispatch;
export type TypedDispatch = ThunkDispatch<AppStoreType, any, AppActionType>;

export const useTypedDispatch = () => useDispatch<TypedDispatch>();
