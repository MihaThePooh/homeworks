import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeAC, colorsArray} from "./bll/themeReducer";


function HW12() {
    const theme = useSelector<AppStoreType, string>( state => state.colorTheme.color);
    const dispatch = useDispatch();

    // useDispatch, onChangeCallback
    const onChangeOptionHandler = (theme: "default" | "dark" | "red" | "some") => {
        dispatch(changeThemeAC(theme))
    };

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12<br/>
                theme:
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <SuperSelect options={colorsArray} onChangeOption={onChangeOptionHandler}/>

            <hr/>
        </div>
    );
}

export default HW12;
