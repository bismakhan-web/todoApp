function addWork(){

    var item = document.getElementById("todoItem");

    var list = document.getElementById("list");
    var li = document.createElement("li");

    var div = document.createElement("div");
    var divText = document.createTextNode(item.value);
    div.setAttribute("id","divValue");
    div.appendChild(divText);

    li.appendChild(div);

    var dltBtn = document.createElement("button");
    var btnText = document.createTextNode("DELETE");
    dltBtn.appendChild(btnText);
    dltBtn.setAttribute("onclick","deleteBtn(this)");
    dltBtn.setAttribute("id","dltbtn");

    li.appendChild(dltBtn);

    var editBtn = document.createElement("button");
    var editText = document.createTextNode("EDIT");
    editBtn.appendChild(editText);
    editBtn.setAttribute("onclick","editBtn(this)");
    editBtn.setAttribute("id","editbtn");

    li.appendChild(editBtn);

    list.appendChild(li);

    item.value = "";

}

function deleteAll(){

    list.innerHTML = "";
}

function deleteBtn(btn){

    btn.parentNode.remove();
}

function editBtn(btn){

    console.log(btn.parentNode.firstChild.innerHTML);
    var input = document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("value",btn.parentNode.firstChild.innerHTML);
    input.setAttribute("onmouseout","sestEditedValue(this)")
    input.setAttribute("id","inp");
    btn.parentNode.firstChild.innerHTML = "";

    btn.parentNode.firstChild.appendChild(input);
    btn.disabled = true;
}

function sestEditedValue(input){

    input.parentNode.parentNode.childNodes[2].disabled = false;
    var value = input.value;
    input.style.display = 'none'
    input.parentNode.innerHTML = value;
}