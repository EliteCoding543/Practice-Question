let num = 3200;
let result = []

function findValue(num){
    for(let i = 2000; i <= num; i++){
        if(i % 7 == 0 && i % 5 != 0){
            result.push(i)
        }
    }

    return result
}

console.log(findValue(num))