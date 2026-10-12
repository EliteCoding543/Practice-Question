
const arr = [12, 35, 1, 10, 34, 35, 36, 37];

const secondLargest = (arr) => {
    let largest1 = -Infinity;
    let secondLargest = -Infinity;

    for (let item of arr) {
        if (item > largest1) {
            secondLargest = largest1;
            largest1 = item;
        } else if (item > secondLargest && item < largest1) {
            secondLargest = item;
        }
    }

    return secondLargest;
};

const result = secondLargest(arr);
console.log("Second largest number is:", result);
