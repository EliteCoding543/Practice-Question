const arr = [1, 2, 8,4 , 5, 9];
let num = arr.length;
function isSorted(arr, num){
    if(num == 0 || num == 1){
        return true;
    }

    return (arr[num - 1] > arr[num - 2] && isSorted(arr, num - 1))

}

console.log(isSorted(arr, num));