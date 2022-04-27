import {InitialStateType, PersonType} from "./tests/homeWorkReducer.test";

type ActionTypes = {
    type: string
    payload: string | number
}

const sortArray = (x: PersonType, y: PersonType) => {
    if (x.name > y.name) return 1;
    if (x.name < y.name) return -1;
    return 0
};

export const homeWorkReducer = (state: InitialStateType, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case "sort": {
            if (action.payload === "up") {
                const sortedUpState = state.sort(sortArray);
                return sortedUpState
            }
            if (action.payload === "down") {
                const sortedDownState = state.sort(sortArray);
                const reversedState = sortedDownState.reverse();
                return [...reversedState]
            }
            return state
        }
        case "check": {
            return state.filter(person => person.age >= 18)
        }
        default: return state
    }
};