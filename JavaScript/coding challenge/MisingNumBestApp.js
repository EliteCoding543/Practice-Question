const arr = [9, 6, 4, 2, 3, 5, 7, 0, 1];

// Expected output: 8

function MissingNumber(arr){
    let sum = 0;
    let missNum = 0;
    let num = arr.length;
    for(let i = 0; i < num; i++ ){
         sum += arr[i];       
    } 
    missNum = (num * (num + 1) / 2) - sum; 
    
    return missNum
    
}

const result = MissingNumber(arr)
console.log(result)