// Only sorted arr par kam krega
const arr = [1, 2, 3, 5, 6];
function missingNumber(arr) {
    // Your logic here
    let misingNum = 0
   for(let i = 0; i < arr.length; i++){
     if(arr[i] + 1 !== arr[i + 1]){
        misingNum = arr[i] + 1;
        break;
     }
   }
   return misingNum
}

const result = (missingNumber(arr)); // 4
console.log("Mising number is : ", result)