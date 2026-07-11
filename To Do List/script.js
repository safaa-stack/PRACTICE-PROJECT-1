const addButton =
document.getElementById("addButton")
const taskinput =
document.getElementById("taskinput")
const tasklist =
document.getElementById("tasklist")

addButton.addEventListener("clik", 
function () {
    const newTask =
document.createElement("li") ;
    newTask.textContent =
taskinput.value;

    tasklist.appendChild(newTask);

    taskinput.value ="";
});