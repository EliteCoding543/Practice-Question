const input = document.getElementById("input")
const btn = document.getElementById("btn")
const right = document.getElementById("right")


// add value event
var inputValue = ""
input.addEventListener("input", (e) => {
    inputValue = e.target.value
})
// console.log(inputValue)

// Add text rigth side
btn.addEventListener("click", () => {
    let item = document.createElement("li")
    item.textContent = inputValue;

    right.append(item)
    input.value = ""
})


// Remove li using delegation event
right.addEventListener("click", (e) => {
    if(e.target.nodeName == "DIV"){
        return
    }
    e.target.remove()
})