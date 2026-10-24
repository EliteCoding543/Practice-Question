const arr = [9, 6, 3, 2, 11, 44, 5, 1, 33];
const num = arr.length;

const selctionSort = (arr) => {
    for(let i = 0; i < num - 1; i++){
        let minIndex = i;

        for(let j = i + 1; j < num; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }

        if(minIndex !== i){
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        }
    }

    return arr;
}

console.log(selctionSort(arr))