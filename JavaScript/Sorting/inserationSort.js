const arr = [5, 2, 1, 4, 3];

const inserationSort = (arr) => {
    const n = arr.length;
    for(let i = 0; i <= n - 1; i++){
        let currElem = arr[i];
        let prevElem = i - 1

        while(prevElem >= 0 && arr[prevElem] > currElem){
            arr[prevElem + 1] = arr[prevElem]
            prevElem--
        }

        arr[prevElem + 1] = currElem;

    }

    return arr;
}

console.log(inserationSort(arr))