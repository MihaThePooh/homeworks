export const colorsArray = ["default", "dark", "red", "some"];

type initStateType = {
    color: string
}

const initState: initStateType = {
    color: colorsArray[0]
};

export const themeReducer = (state = initState, action: ReturnType<typeof changeThemeC>): initStateType => { // fix any
    switch (action.type) {
        case "CHANGE-THEME": {
            return {
                ...state,
                color: action.newTheme
            };
        }
        default: return state;
    }
};

export const changeThemeC = (newTheme: "default" | "dark" | "red" | "some") => {
    return {
        type: "CHANGE-THEME",
        newTheme
    } as const
};