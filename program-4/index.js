const arr = [5, 3, 8, 1, 2, 9, 4, 7, 6];

function sortAscending(arr) {
    return arr.sort((a, b) => a - b);
}

console.log(sortAscending([100,180,260,310,40,535,695])); // outout: [40, 100, 180, 260, 310, 535, 695]
console.log(sortAscending([1,2,3,4,5,6,7,8,9,10])); // output: [1,2,3,4,5,6,7,8,9,10]
console.log(sortAscending([10,9,8,7,6,5,4,3,2,1])); // outout: [1,2,3,4,5,6,7,8,9,10]

