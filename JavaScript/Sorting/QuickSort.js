const arr = [8, 12, 34, 7, 20, 19, 10];

const quickSort = (arr, start, end) => {
    if(start < end){
        let indexPivot = partiton(arr,start, end)

        // Left half call 
        quickSort(arr, start, indexPivot - 1);
        
        // Right half call 
        quickSort(arr, start + 1, end)
    }

    return arr;
}

const partiton = (arr, start, end) => {
    let indx = start - 1;
    let pivot = arr[end]

    for(let j = start; j < end; j++){
        if(arr[j] < pivot){
            indx++
            [arr[indx], arr[j]] = [arr[j], arr[indx]]
        }
    }

    indx++
    [arr[indx], arr[end]] = [arr[end], arr[indx]]

    return indx
}

console.log(quickSort(arr, start = 0, end = arr.length - 1));
