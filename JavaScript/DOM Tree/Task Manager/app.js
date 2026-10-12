const input = document.getElementById("input");
const task = document.getElementById("task");
const taskBtn = document.getElementById("add-task");

let inputValue = "";

input.addEventListener("input", (e) => {
    inputValue = e.target.value;
});

taskBtn.addEventListener("click", () => {

    if (inputValue.trim() === "") {
        alert("Please enter some value...")
        return;
    }

    // Create task card
    const div = document.createElement("div");
    div.classList.add("task-card");

    // Create task title
    const paragraph = document.createElement("h3");

    // Create remove button
    const removeBtn = document.createElement("button");
    removeBtn.classList.add("removeBtn");

    // Add content
    paragraph.textContent = inputValue;
    removeBtn.textContent = "Remove";

    // Add paragraph and button inside task card
    div.append(paragraph, removeBtn);

    // Add task card inside task container
    task.append(div);

    // Reset input
    inputValue = "";
    input.value = "";
});


// Event Delegation
task.addEventListener("click", (e) => {

    const removeBtn = e.target.closest(".removeBtn");

    if (!removeBtn) {
        return;
    }

    const taskCard = removeBtn.closest(".task-card");

    taskCard.remove();
});

