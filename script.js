const addButton =
document.getElementById("addButton");
const taskinput = 
document.getElementById("taskinput");
const tasklist = 
document.getElementById("tasklist");

addButton.addEventListener("click", function () {
    const newTask = 
    document.createElement("li");
    newTask.textContent = 
taskinput.value;

    const deleteButton =
    document.createElement("button");
    deleteButton.textContent =
"Delete";
 deleteButton.addEvenetListener("click,
function () {
        newTask.remove();
});
    
    newTask.appendChild(deleteButton);

     tasklist.appendChild(newTask);

    taskinput.value = "";
});