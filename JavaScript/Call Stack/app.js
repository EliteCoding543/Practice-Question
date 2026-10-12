// function first() {
//     console.log("A")
//     second()
//     console.log("B")
// }

// function second(){
//     console.log("C")
// }

// first()

// Promise.resolve(2)
//   .then((x) => {
//     return x + 3; // 2 + 3 == 5
//   })
//   .then((x) => {
//     console.log(x);
//     return x * 2; // 5 * 2 == 10
//   })
//   .then((x) => {
//     console.log(x);
//   });

// const result = console.log("Hello")
// console.log(result)

// function test() {
//   console.log("Hello");
//   console.log("World");
  
// }

// const result = test();
// console.log(result);

function greet(){
    console.log("Good Evening...")
}

function test(callBack){
    callBack()
    console.log(greet === callBack) // true same refernce par point kr rhe h
}

test(greet)