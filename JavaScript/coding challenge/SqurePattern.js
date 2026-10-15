const num = 5;
let str = ""
function SqureNum(num){
    for(let i = 1; i<= num; i++){
        for(let j = 1; j<=num; j++){
            str += j + " ";
        }    
    }
    return str
}

console.log(SqureNum(num))