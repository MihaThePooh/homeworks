import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {loadingAC} from "./bll/loadingReducer";
import {AppStoreType} from "./bll/store";
import preloader from "./settings.gif";

function HW10() {
    // useSelector, useDispatch
    // const loading = false;

    const isLoading = useSelector<AppStoreType>(state => state.loading.isLoading);
    const dispatch = useDispatch();

    const setLoading = () => {
        // dispatch
        dispatch(loadingAC(true));
        // setTimeout
        setTimeout( () => dispatch(loadingAC(false)),2000);
        console.log("loading...");
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {isLoading
                ? (
                    <div><img src={preloader} style={{height: "39px"}}/></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    );
}

export default HW10;
