const arr = [34, 45, 76, 8, 6, 5, 73, 678, 43534];

const minNumber = findMin(arr);

console.log(`Min number is ${minNumber}`);

/**
 * 
 * @param {Array<number>} array 
 * @returns {number}
 */
function findMin(array) {
    let min = Number.POSITIVE_INFINITY;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}