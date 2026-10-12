const parent = document.getElementById("list");
const item = document.getElementsByTagName("li")
const card = document.getElementById("card");

parent.addEventListener("click", (e) => {

    if (e.target.tagName !== "LI") {
        return;
    }

    let curr = e.target.innerText;
    card.innerText = curr + " , " + card.innerText;
});