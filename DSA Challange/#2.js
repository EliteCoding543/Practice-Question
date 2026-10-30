let num = 300;

function divisible(num){
    let result = []

    for(let i = 200; i <= num; i++){
        if(i % 3 === 0 && i % 5 === 0){
            result.push(i)
        }
    }

    return result
}

console.log(divisible(num))