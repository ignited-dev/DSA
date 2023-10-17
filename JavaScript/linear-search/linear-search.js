const arr = [34, 45, 76, 8, 6, 5, 73, 678];
const target = 43534;

const elementIndex = findMin(arr, target);

if (elementIndex !== -1) console.log(`Target: ${target} found at ${elementIndex} index`);
else console.log(`Target: ${target} not found`);

/**
 * 
 * @param {Array<number>} array 
 * @param {number} target 
 * @returns 
 */
function findMin(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == target) {
            return i;
        }
    }
    return -1;
}