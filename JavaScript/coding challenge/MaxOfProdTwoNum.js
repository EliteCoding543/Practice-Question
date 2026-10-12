const arr = [1, 2, 3, 4, 5 , 6];

function maxProdTowNum(arr) {
    let max = -Infinity;
    let max2 = -Infinity;

    for(let num of arr){
        if(num > max){
            max2 = max
            max = num
        }
        else if(num > max2){
            max2 = num
        }
    }

    return max * max2
}

const result = maxProdTowNum(arr)
console.log(result)