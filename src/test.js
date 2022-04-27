let initialState = [
    {_id: 0, name: "Кот", age: 3},
    {_id: 1, name: "Александр", age: 66},
    {_id: 2, name: "Коля", age: 16},
    {_id: 3, name: "Виктор", age: 44},
    {_id: 4, name: "Дмитрий", age: 40},
    {_id: 5, name: "Ирина", age: 55},
];

console.log(initialState);

const sortArray = (x, y) => {
    if (x.name > y.name) return 1;
    if (x.name < y.name) return -1;
    return 0
};

const sortedDownState = initialState.sort(sortArray);

console.log(sortedDownState.reverse());

// _____________________________

const now = new Date();
console.log(now);
console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
