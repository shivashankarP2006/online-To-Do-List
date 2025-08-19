let todolist=[];
const addtask = document.getElementById("AddTask");
addtask.addEventListener("click", addtodoItem);
function addtodoItem(){
    let item = document.getElementById("TodoInput").value;
    todolist.push(item);
    let list = document.getElementById("todolist");
    let listItem = document.createElement("div");
    listItem.className = "todoItem";

    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.onclick = function() {
        if (checkBox.checked){
            itemtext.style.textDecoration = "line-through";
            listItem.classList.add("checked");
        }else{
            itemtext.style.textDecoration = "none";
            listItem.classList.remove("checked");
        }
    }
    listItem.appendChild(checkBox);
    let itemtext = document.createElement("span");
    itemtext.textContent = item;
    listItem.appendChild(itemtext);
    let buttonDiv = document.createElement("div");
    listItem.appendChild(buttonDiv);
    let editbutton = document.createElement("button");
    editbutton.innerHTML = '<i class="fas fa-edit"></i>';
    editbutton.onclick = function() {
        itemtext.contentEditable = "true";
        itemtext.focus();
    }
    buttonDiv.appendChild(editbutton);
    itemtext.onblur = function() {
        itemtext.contentEditable = "false";
        todolist[todolist.indexOf(item)] = itemtext.textContent;

    }
    let deletebutton = document.createElement("button");
    deletebutton.innerHTML = '<i class="fas fa-trash"></i>';
    deletebutton.onclick = function() {
        list.removeChild(listItem);
        todolist.splice(todolist.indexOf(item), 1);

    }
    buttonDiv.appendChild(deletebutton);
    list.appendChild(listItem);
    document.getElementById("TodoInput").value = "";
}