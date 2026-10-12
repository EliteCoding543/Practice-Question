const outer = document.getElementById("outer")
const middle = document.getElementById("middle")
const inner = document.getElementById("inner")

outer.addEventListener("click", () => {
    console.log("outer click")
}, {capture : true})

middle.addEventListener("click", () => {
    console.log("middle click")
}, true)

inner.addEventListener("click", () => {
    console.log("inner click")
})