const arr = [34, 45, 76, 8, 6, 5, 73, 678, 43534];
const target = 45;
const startIndex = 1;
const endIndex = 3;

const elementIndex = findMin(arr, target, startIndex, endIndex);

if (elementIndex !== -1) console.log(`Target: ${target} found at ${elementIndex} index`);
else console.log(`Target: ${target} not found`);

/**
 * 
 * @param {Array<number>} array 
 * @param {number} target 
 * @param {number} startIndex
 * @param {number} endIndex
 * @returns {number}
 */
function findMin(array, target, startIndex, endIndex) {
    if (startIndex >= endIndex && endIndex > array.length) return -1;

    for (let i = startIndex; i < endIndex; i++) {
        if (array[i] == target) {
            return i;
        }
    }
    return -1;
}