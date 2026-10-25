
const arr = [12, 31, 35, 8, 17, 32];

const quickSorting = (arr, start, end) => {
    if (start < end) {
        const pivotIndex = partition(arr, start, end);

        // Left half
        quickSorting(arr, start, pivotIndex - 1);

        // Right half
        quickSorting(arr, pivotIndex + 1, end);
    }

    return arr;
};

function partition(arr, start, end) {
    let indx = start - 1;
    const pivot = arr[end];

    for (let j = start; j < end; j++) {
        if (arr[j] < pivot) {
            indx++;

            [arr[indx], arr[j]] = [arr[j], arr[indx]];
        }
    }

    indx++;

    // Pivot ko correct position par rakho
    [arr[indx], arr[end]] = [arr[end], arr[indx]];

    return indx;
}

console.log(quickSorting(arr, 0, arr.length - 1));
