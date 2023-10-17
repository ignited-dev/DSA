/**
 * Find numbers with even number of digits With.
 */

const arr = [1, 12, 123, 1234, 12345, 123456, 1234567, 12345678, 123456789, 1234567890, -123];

console.log(findNumbersWithEvenNumberOfDigits(arr));

function findNumbersWithEvenNumberOfDigits(arr) {
    const collectedResults = [];

    // for (let i = 0; i < arr.length; i++)
    //     if (convertNumberToNumbersArray(arr[i]).length % 2 == 0) collectedResults.push(arr[i]);


    for (let i = 0; i < arr.length; i++)
        if ((getDigitCount(arr[i]) & (2 - 1)) == 0) collectedResults.push(arr[i]);

    return collectedResults;
}

function convertNumberToNumbersArray(number) {
    let temp = [];
    if (number < 0) number = number * -1;
    while (number > 0) {
        const rem = number % 10;
        temp.push(rem);
        number = Math.floor(number / 10);
    }
    return temp;
}

function getDigitCount(number) {
    if (number < 0) number = number * -1;
    return Math.floor(Math.log10(number) + 1);
}