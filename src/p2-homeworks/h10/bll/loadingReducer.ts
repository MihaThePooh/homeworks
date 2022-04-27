export type StateType = {
    isLoading: boolean
}

const initState: StateType = {
    isLoading: false
};

export const loadingReducer = (state = initState, action: ActionType): StateType => {
    switch (action.type) {
        case "IS_LOADING": {
            return {
                ...state,
                isLoading: action.status
            };
        }
        default: return state;
    }
};

export const loadingAC = (status: boolean) => {
    return {
        type: "IS_LOADING",
        status
    } as const
};

type ActionType = ReturnType<typeof loadingAC>