// const data = document.querySelector("h1")
// console.log(data)

const parent = document.getElementById("parent")
const btn = document.getElementById("btn")


parent.addEventListener("click", (e) => {
    // console.log(e.target)
    // const clickVlaue = e.target
    // console.log(`click huva ${clickVlaue}` )
    // console.log(e.currentTarget)
    console.log("Parent")
}, {capture : true})

btn.addEventListener("click", (e) => {
    //   console.log(e.target)
    console.log("btn")
})

// const a = true + true + true * 3;
// console.log(a)  
// लेकिन जावास्क्रिप्ट (JavaScript) गणित के एक बहुत ही ज़रूरी नियम का पालन करता है जिसे BODMAS / Operator Precedence कहते हैं। 

// let b = 1;
// let c= 0;
// c += b
// console.log(c * 2)