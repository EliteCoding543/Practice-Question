const input = document.getElementById("input");
const btn = document.getElementById("btn");
const main = document.getElementById("main");
const approve = document.getElementById("approve");
const done = document.getElementById("done");

let getInputValue = "";
let taskCount = 0;

input.addEventListener("input", (e) => {
   getInputValue = e.target.value;
});

btn.addEventListener("click", () => {
if (getInputValue.trim() === "") return;

const heading = document.createElement("h2");

taskCount++;

heading.setAttribute("draggable", "true");
heading.setAttribute("id", `task-${taskCount}`);
heading.innerText = getInputValue;

// Drag start
heading.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", e.target.id);
});

main.append(heading);

getInputValue = "";
input.value = "";

});

// Allow dropping
done.addEventListener("dragover", (e) => {
e.preventDefault();
});

approve.addEventListener("dragover", (e) => {
  e.preventDefault();
});

// Drop into Done
done.addEventListener("drop", (e) => {
e.preventDefault();


const myData = e.dataTransfer.getData("text/plain");
const draggedTask = document.getElementById(myData);

if (draggedTask) {
    done.appendChild(draggedTask);
}

});

// Drop into Approved
approve.addEventListener("drop", (e) => {
e.preventDefault();


const myData = e.dataTransfer.getData("text/plain");
const draggedTask = document.getElementById(myData);

if (draggedTask) {
    approve.appendChild(draggedTask);
}

});
