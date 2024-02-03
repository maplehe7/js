let input = document.getElementById("addForm")
let listItems = document.getElementById("items")
let text = document.getElementById("item")
let filter = document.getElementById("filter")
function addItem(event) {

    event.preventDefault()
    let newItem = document.createElement("li")
    newItem.className = "list-group-item"
    let button = document.createElement("button")
    button.className = "btn btn-danger btn-sm float-right delete"
    newItem.textContent = (text.value)
    button.textContent = ("X")
    newItem.appendChild(button)

    listItems.appendChild(newItem)




}
function filterItems(event) {
    let text = event.target.value
    let allListItems = document.getElementsByTagName("li")
    Array.from(allListItems).forEach(function (element) {
        let elementName = element.firstChild.textContent;
        if (elementName.indexOf(text) != -1) {
            element.style.display = "block"
        }
        else {
            element.style.display = "none"
        }
    })
}
function removeItem(event) {
    let clickedOn = event.target.parentElement;
    listItems.removeChild(clickedOn)
}
filter.addEventListener("keyup", filterItems)
listItems.addEventListener("click", removeItem)
input.addEventListener("submit", addItem)