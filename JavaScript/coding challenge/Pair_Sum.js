const arr = [-3, -1, 0, 2, 4, 5];
const target = 1;

function findPairSum(arr, target){
    let start = 0;
    let end = arr.length-1;
    let result = [];

    while(start < end){
        let sum = arr[start] + arr[end]

        if(sum === target){
            result.push([arr[start], arr[end]])
            start++;
            end--
        }

        else if(sum < target){
            start++
        }

        else {
            end--
        }
    }
    return result;
}

console.log(findPairSum(arr, target));



// function TwoSumPairs(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;
//     let result = [];

//     while (left < right) {
//         let sum = arr[left] + arr[right];

//         if (sum === target) {
//             result.push([arr[left], arr[right]]);
//             left++;
//             right--;
//         } else if (sum < target) {
//             left++;
//         } else {
//             right--;
//         }
//     }

//     return result;
// }

// console.log(TwoSumPairs(arr, target));
// [[-3, 4], [-1, 2]]
