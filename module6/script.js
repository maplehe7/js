let input = document.getElementsByTagName("input")[0];
let button = document.getElementsByTagName("button")[0];
let ol = document.querySelector("ol");
let form = document.querySelector("form");
let editing = false;
let editingItem;
let list = []
let clearall = document.getElementById("clearall")
clearall.addEventListener("click", (event) => {
    localStorage.clear()
    location.reload()
})
    

console.log(localStorage.getItem("list"))
if (localStorage.getItem("list") != null) {
    list = JSON.parse(localStorage.getItem("list"))
    for (let i = 0; i < list.length; i++) {
        let newText = input.value;
        let li = document.createElement("li");
        let p = document.createElement("p");
        p.textContent = list[i];
        li.appendChild(p);
        let div = document.createElement("div");
        let i1 = document.createElement("i");
        let i2 = document.createElement("i");
        i1.className = "fa-solid fa-pen-to-square";
        i1.setAttribute('onclick', 'editItem(this)');
        i2.className = "fa-solid fa-trash";
        i2.setAttribute('onclick', 'deleteItem(this)');
        div.appendChild(i1);
        div.appendChild(i2);
        li.appendChild(div);
        ol.appendChild(li);

    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!editing) {
        let newText = input.value;
        let li = document.createElement("li");
        let p = document.createElement("p");
        p.textContent = newText;
        li.appendChild(p);
        let div = document.createElement("div");
        let i1 = document.createElement("i");
        let i2 = document.createElement("i");
        i1.className = "fa-solid fa-pen-to-square";
        i1.setAttribute('onclick', 'editItem(this)');
        i2.className = "fa-solid fa-trash";
        i2.setAttribute('onclick', 'deleteItem(this)');
        div.appendChild(i1);
        div.appendChild(i2);
        li.appendChild(div);
        ol.appendChild(li);
        list.push(input.value)
        localStorage.setItem("list", JSON.stringify(list))
        input.value = "";

    }
   
    else {
        editingItem.textContent = input.value;
        list = Array.from(document.getElementsByTagName("p")).map((item) => item.textContent)
        console.log(list)
        localStorage.setItem("list", JSON.stringify(list))
        input.value = ""
        editing = false;
    }
});

const editItem = (item) => {
    editing = true;
    editingItem = item.parentElement.previousElementSibling;
    input.value = editingItem.textContent;

}
const deleteItem = (item) => {
    let li = item.parentElement.parentElement;
    ol.removeChild(li);
    list = Array.from(document.getElementsByTagName("p")).map((item) => item.textContent)
    console.log(list)
    localStorage.setItem("list", JSON.stringify(list))

}

const fruits = ["apple", "orange", "grapes", "banana"]
fruits.forEach((item) => console.log(item))
const array = Array.from(document.getElementsByTagName("p"))


array.forEach((item) => console.log(item.textContent))