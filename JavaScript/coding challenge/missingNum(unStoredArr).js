
const arr = [3, 0, 1];

function missingNumber(arr) {
    const n = arr.length;
    const expectedSum = (n * (n + 1)) / 2;

    const actualSum = arr.reduce((sum, num) => sum + num, 0);

    return expectedSum - actualSum;
}

console.log(missingNumber(arr)); // 2
