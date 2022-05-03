import {InitStateHW13Type, isCheckedAC, isCheckedReducer} from "./isCheckedReducer";

let startState: InitStateHW13Type;

beforeEach(() => {
    startState = { isChecked: false };
});

test('isCheckedReducer change flag to opposite', () => {
    const changedState = isCheckedReducer(startState, isCheckedAC(true));

    expect(changedState.isChecked).toBe(true);
});