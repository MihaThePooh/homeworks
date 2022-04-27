import React from 'react';
import {homeWorkReducer} from "../homeWorkReducer";

export type PersonType = { _id: number, name: string, age: number }
export type InitialStateType = Array<PersonType>

let initialState: InitialStateType;

beforeEach(() => {
    initialState = [
        {_id: 0, name: "Кот", age: 3},
        {_id: 1, name: "Александр", age: 66},
        {_id: 2, name: "Коля", age: 16},
        {_id: 3, name: "Виктор", age: 44},
        {_id: 4, name: "Дмитрий", age: 40},
        {_id: 5, name: "Ирина", age: 55},
    ]
});

test("sort name up", () => {
    const newState = homeWorkReducer(initialState, {type: "sort", payload: "up"});

    expect(newState).toStrictEqual([
            {_id: 1, name: 'Александр', age: 66},
            {_id: 3, name: 'Виктор', age: 44},
            {_id: 4, name: 'Дмитрий', age: 40},
            {_id: 5, name: 'Ирина', age: 55},
            {_id: 2, name: 'Коля', age: 16},
            {_id: 0, name: 'Кот', age: 3},
        ]
    );
});

test("sort name down", () => {
    const newState = homeWorkReducer(initialState, {type: "sort", payload: "down"});

    expect(newState).toStrictEqual([
            {_id: 0, name: 'Кот', age: 3},
            {_id: 2, name: 'Коля', age: 16},
            {_id: 5, name: 'Ирина', age: 55},
            {_id: 4, name: 'Дмитрий', age: 40},
            {_id: 3, name: 'Виктор', age: 44},
            {_id: 1, name: 'Александр', age: 66},
        ]
    );
});

test("check age 18", () => {
    const newState = homeWorkReducer(initialState, {type: "check", payload: 18});

    expect(newState).toStrictEqual([
            {_id: 1, name: "Александр", age: 66},
            {_id: 3, name: "Виктор", age: 44},
            {_id: 4, name: "Дмитрий", age: 40},
            {_id: 5, name: "Ирина", age: 55},
        ]
    );
});
