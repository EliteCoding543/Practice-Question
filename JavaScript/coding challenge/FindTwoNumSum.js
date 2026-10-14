const arr = [2, 7, 11, 15];
const target = 9;

function TwoSumNum(arr, target){
    let left = 0;
    let right = arr.length - 1;

    while(left < right){
        // Find sum of arr left and right
        let sum = arr[left] + arr[right];

        if(sum === target){
            return [arr[left], arr[right]]
        }
        else if(sum < target){
            left++
        }
        else {
            right--
        }
    }
    return [];
}

const result = TwoSumNum(arr, target)
console.log(result)