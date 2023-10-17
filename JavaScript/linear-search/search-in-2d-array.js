const arr = [
    [1, 2, 3, 4],
    [11, 12, 13, 14],
    [21, 22, 23, 24],
    [31, 32, 33, 34]
];

const target = 35;

const elementIndex = findMaxIn2dArray(arr, target);

if (!elementIndex.includes(-1)) console.log(`Target: ${target} found at ${elementIndex[0]},${elementIndex[1]} index`);
else console.log(`Target: ${target} not found`);

/**
 * 
 * @param {Array<Array<number>>} arr 
 * @param {number} target
 * @returns {number} 
 */
function findMaxIn2dArray (arr, target) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] == target) {
                return [i, j];
            }
        }
    }
    return [-1, -1];
}