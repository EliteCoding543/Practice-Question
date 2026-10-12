const left = document.getElementById("left")
const right = document.getElementById("right")

left.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text", e.target.id)
    console.log(e.target)
})

right.addEventListener("dragover", (e) => {
    e.preventDefault()
})

right.addEventListener("drop", (e) => {
    e.preventDefault()
    const myData = e.dataTransfer.getData("text")
    e.target.appendChild(document.getElementById(myData))
    
})