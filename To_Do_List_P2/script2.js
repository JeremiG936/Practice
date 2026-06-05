const taskSubmitter = document.getElementById("taskSubmitter");
const theButton1 = document.getElementById("theButton1");
const listShower = document.getElementById("listShower");
let theList = [];

function renderedList() {
    listShower.innerHTML = theList.map((item, index) => {
    return `<li>${item}
    <button id="theButton2" onClick="deleteTask(${index})">X</button></li>`
    }).join("")
}

renderedList();

theButton1.addEventListener("click", function() {
    theList.push(taskSubmitter.value);
    renderedList();
})


function deleteTask(indexToRemove) {
    theList = theList.filter((item, index) => {
        return index !== indexToRemove
    });
    renderedList()
}