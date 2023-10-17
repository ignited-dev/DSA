const arr = [
    [1, 2, 3, 4],
    [11, 120, 13, 14],
    [21, 22, 23, 24],
    [31, 32, 33, 34]
];

const maxElement = findMaxIn2dArray(arr);

console.log("Max Element is ", maxElement)

/**
 * 
 * @param {Array<Array<number>>} arr 
 * @returns {number} 
 */
function findMaxIn2dArray (arr) {
    let max = Number.NEGATIVE_INFINITY;

    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > max) {
                max = arr[i][j];
            }
        }
    }
    return max;
}