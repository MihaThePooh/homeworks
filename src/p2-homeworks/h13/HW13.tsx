import React from "react";
import {useSelector} from "react-redux";
import {AppStoreType, useTypedDispatch} from "../h10/bll/store";
import {isCheckedAC, isCheckedTC} from "./isCheckedReducer";
import {$CombinedState} from "redux";

function HW13() {
    return <Request/>
}

function Request() {

    const isChecked = useSelector<AppStoreType, boolean>(state => state.hw13.isChecked);
    const responseMessage = useSelector<AppStoreType, string>(state => state.hw13.responseMessage);
    const dispatch = useTypedDispatch();

    const onClickHandler = (isChecked: boolean) => {
        dispatch(isCheckedTC(isChecked));
    };

    const onChangeCheckboxHandler = (isChecked: boolean) => {
        dispatch(isCheckedAC(!isChecked))
    };

    return <>
        <button onClick={() => onClickHandler(isChecked)}>button</button>
        <input type="checkbox"
               checked={isChecked}
               onChange={() => {onChangeCheckboxHandler(isChecked)}}/>
        <span>{responseMessage}</span>
    </>
}

export default HW13