const arr = [1, 2, 3, 4, 5];
// Initial value di: Callback first element se execute hoga.
// Initial value nahi di: First element accumulator banega; callback second element se execute hoga.

const result = arr.reduce((prev,  curr, index, arr) => {
    console.log("index is : ", index, "Array is :", arr)
   return prev + curr
}, 0)
console.log("Total is : ", result)

// Callback ke 4 parameters hote hain, lekin initialValue callback ka parameter nahi hai — woh reduce() ka second argument hai.


// const result = arr.map((item) => item + 2)
// console.log(result)