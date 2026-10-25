const num = 20;
const result = []
let fizzCount = 0;
let buzzCount = 0;
let BothCount = 0;

const fizzBazz = (num) => {
    for(let i = 1; i<= 20; i++){
        // Both condition chcek

        if(i % 3 === 0 && i % 5 === 0){
            result.push("FizzBuzz")
            BothCount++

        }

        else if(i % 3 === 0){
            result.push("Fizz")
            // fizzCount++
        }

        else if(i % 5 === 0){
            result.push("Buzz")
            buzzCount++
        }

        else {
            result.push(i.toString())
        }
    }

    return result
}

console.log(fizzBazz(num));