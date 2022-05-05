import {Dispatch} from "react";
import {hw13API} from "./RequestsAPI";

export type InitStateHW13Type = {
    isChecked: boolean
    responseMessage: string
};

const initStateHW13: InitStateHW13Type = {
    isChecked: false,
    responseMessage: ""
};

export const isCheckedReducer = (state = initStateHW13, action: ActionsHW13Types): InitStateHW13Type => {
    switch (action.type) {
        case "IS_CHECKED": {
            console.log({
                ...state,
                isChecked: action.isChecked
            });
            return {
                ...state,
                isChecked: action.isChecked
            }
        }
        case "SHOW_RESPONSE_MESSAGE": {
            return {
                ...state,
                responseMessage: action.responseMessage
            }
        }
        default: return state;
    }
};

export type ActionsHW13Types =
    ReturnType<typeof isCheckedAC> |
    ReturnType<typeof showResponseMessageAC>

export const isCheckedAC = (isChecked: boolean) => {
    return {
        type: "IS_CHECKED",
        isChecked
    } as const
};
const showResponseMessageAC = (responseMessage: string) => {
    return {
        type: "SHOW_RESPONSE_MESSAGE",
        responseMessage
    } as const
};

export const isCheckedTC = (isChecked: boolean) => {
    return (dispatch: Dispatch<ActionsHW13Types>) => {
        hw13API.postCheckbox(isChecked)
            .then((res: any) => {
                console.log(res.data.errorText + " // " + res.data.info);
                dispatch(isCheckedAC(res.data.yourBody.success));
                dispatch(showResponseMessageAC(res.data.errorText + " // " + res.data.info))
            })
            .catch(err => {
                console.log(err.response.data.errorText + " // " + err.response.data.info);
                dispatch(showResponseMessageAC(err.response.data.errorText + " // " + err.response.data.info))
            })
    }
};
