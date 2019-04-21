const userInput = document.getElementById("user-input");
const btn = document.getElementById("add-item");
const displayData = document.getElementById("display-items");
const error = document.querySelector(".error");

function addItem() {
    userInput.value = userInput.value.trim();
    if (userInput.value !== "") {
        let list = document.createElement("li");
        list.textContent = userInput.value;
        displayData.appendChild(list);
        error.textContent = "";
        userInput.value = "";
        userInput.focus();
        userInput.select();
        error.style.display = 'none';

    } else {
        error.textContent = "ERROR: No content here!";
        error.style.display = 'block';
    }
}
btn.addEventListener("click", addItem);
