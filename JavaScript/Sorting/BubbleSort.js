const arr = [2, 4, 3, 1, 5];

const bubbleSorting = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        let isSorted = true;

        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                isSorted = false;
            }
        }

        if (isSorted) {
            console.log("Array is already sorted");
            break;
        }
    }

    return arr;
};

console.log(bubbleSorting(arr));