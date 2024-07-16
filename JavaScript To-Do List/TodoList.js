var inputs = document.querySelector("#inputValue");
var text = document.querySelector(".text");
function add() {
    if (inputs.value == "") {
        alert("Please Enter task");
    }
    else {
        var addEle = document.createElement("ul");
        addEle.innerHTML = `${inputs.value} <i class="fa-solid fa-trash"></i>`;
        inputs.value = "";
        text.append(addEle);
        addEle.querySelector("i").addEventListener("click", remove);
        function remove() {
            addEle.remove();
        }
    }
}