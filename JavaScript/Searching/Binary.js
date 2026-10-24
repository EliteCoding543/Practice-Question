const arr = [10, 20, 30, 40, 50, 60, 70, 80];
const target = 40;
const num = arr.length;

const binarySearch = (arr, target) => {
    let start = 0;
    let end = num - 1;
    let indeXtarget = 0;

    while(start < end){
        let mid = Math.floor(arr[start] + arr[end] / 2);

        if(mid < target){
            indeXtarget = start[i]
            start++
        }
        else{
            end--;
        }
    }

    return indeXtarget
}

console.log(binarySearch(arr, target));