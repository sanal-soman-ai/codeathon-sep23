const arr = [5, 3, 8, 1, 2, 9, 4, 7, 6];

function sortAscending(arr) {
    return arr.sort((a, b) => a - b);
}

console.log(sortAscending(arr)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
