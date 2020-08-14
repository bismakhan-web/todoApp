function Todoitems(item,key){

    this.item = item;
    this.key = key;
}

function addWork(){

    var item = document.getElementById("todoItem");

    var list = document.getElementById("list");
    var li = document.createElement("li");

    var div = document.createElement("div");
    var divText = document.createTextNode(item.value);
    div.setAttribute("id","divValue");
    div.appendChild(divText);

    li.appendChild(div);

    var key = (Math.random() * 25689346).toFixed();

    var newItem = new Todoitems(item.value, key);

    var dltBtn = document.createElement("button");
    var btnText = document.createTextNode("DELETE");
    dltBtn.appendChild(btnText);
    dltBtn.setAttribute("onclick","deleteBtn(this, this.id)");
    dltBtn.setAttribute("id",key);
    dltBtn.setAttribute("class","dltbtn");

    li.appendChild(dltBtn);

    var editBtn = document.createElement("button");
    var editText = document.createTextNode("EDIT");
    editBtn.appendChild(editText);
    editBtn.setAttribute("onclick","editBtn(this, this.id)");
    editBtn.setAttribute("id",key);
    editBtn.setAttribute("class","editbtn");

    li.appendChild(editBtn);

    list.appendChild(li);

    // for(var key in newItem.key){

    //     console.log(key);
    // }
    //console.log(newItem.key);
    firebase.database().ref('work/' + key).set(newItem);
    item.value = "";

}

function deleteAll(){

    firebase.database().ref('work').remove();
    list.innerHTML = "";
}

function deleteBtn(btn, id){

    firebase.database().ref('work/' + id).remove();
    btn.parentNode.remove();
}

function editBtn(btn, id){

    //console.log(btn.parentNode.firstChild.innerHTML);
    var input = document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("value",btn.parentNode.firstChild.innerHTML);
    input.setAttribute("onmouseout","sestEditedValue(this, this.id)")
    input.setAttribute("id", id);
    input.setAttribute("class","inp");
    btn.parentNode.firstChild.innerHTML = "";

    btn.parentNode.firstChild.appendChild(input);
    btn.disabled = true;
}

function sestEditedValue(input, id){

    input.parentNode.parentNode.childNodes[2].disabled = false;
    var value = input.value;
    input.style.display = 'none'
    input.parentNode.innerHTML = value;
    firebase.database().ref('work/' + id).set({
        item: value,
        key: id
    })
}