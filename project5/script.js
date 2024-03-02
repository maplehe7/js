let menuthings = document.getElementsByTagName("li");
menuthings[0].textContent = "Petit-déjeuner";
menuthings[1].textContent = "Déjeuner";
menuthings[2].textContent = "Dîner";
menuthings[3].textContent = "Boissons";
menuthings[4].textContent = "Dessert";
const img = document.querySelector("#menu img");
const h2 = document.querySelector("#menu h2");
const p = document.getElementsByTagName("p");
const breakfastBtn = document.querySelector("ul li:first-of-type");
const lunchBtn = document.querySelector("ul li:nth-of-type(2)");
const dinnerBtn = document.querySelector("ul li:nth-of-type(3)");
const drinksBtn = document.querySelector("ul li:nth-of-type(4)");
const dessertBtn = document.querySelector("ul li:nth-of-type(5)");
const body = document.getElementsByTagName("body")
let itemSelector = 0
class FoodItem {
    constructor(name, description, price, imagePath) {
        this.name = name
        this.description = description
        this.price = price
        this.imagePath = imagePath
    }
    
}
class Menu {
    constructor(name, description, price, imagePath) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.imagePath = imagePath;
    }

    display() {
        img.src = this.imagePath;
        h2.textContent = this.name;
        p[0].textContent = this.description;
        p[1].textContent = "$" + this.price;
    }
}
breakfastItems = [
    new FoodItem("Pizza", "Good pizza you should buy", 10.99, "https://i.ytimg.com/vi/LrTKeT8xBRg/maxresdefault.jpg"),
    new FoodItem("Pizza", "Good pizza you should buy", 10.99, "https://i.ytimg.com/vi/LrTKeT8xBRg/maxresdefault.jpg")
]
const breakfast = new Menu("Pizza", "Good pizza you should buy", 10.99, "https://i.ytimg.com/vi/LrTKeT8xBRg/maxresdefault.jpg");
const lunch = new Menu("Burger", "Yummy burger with fries", 12.99, "https://www.foodandwine.com/thmb/fIHZWJjIDYElmCYrp9LpS1jIIF8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/worlds-largest-burger-complete-FT-BLOG0717-897f463351be4036bc94bc18069dce6e.jpg");
const dinner = new Menu("Pasta", "yummy pasta with alferado sauce", 14.99, "https://www.ocregister.com/wp-content/uploads/migration/kz7/kz71ni-b78616343z.120100312160447000g4nn668h.1.jpg?w=620");
const drinks = new Menu("Smoothie", "yummy fruit smoothie", 5.99, "https://www.worldrecordacademy.com/drinks/img/215451_largest_smoothie_McGill.jpg");
const dessert = new Menu("Cheesecake", "yummy cheesecake with strawberries", 8.99, "https://hips.hearstapps.com/delish/assets/cm/15/10/54f63b66d0a6c_-_worlds-largest-cheesecake-xl.jpg");

function menuItemClick(menu, button) {
    menu.display();
    button.style.textDecoration = "underline";
    const alldabuttons = [breakfastBtn, lunchBtn, dinnerBtn, drinksBtn, dessertBtn];
    for (const btn of alldabuttons) {
        if (btn !== button) {
            btn.style.textDecoration = "";
        }
    }
}


window.addEventListener("load", () => {
    breakfast.display();
    breakfastBtn.style.textDecoration = "underline";
});

breakfastBtn.addEventListener("click", function () {
    menuItemClick(breakfast, this);
    for(let i = 1; i < breakfastItems.length; i++){
        let newSection = document.createElement("section")
        let newImg = document.createElement("img")
        newImg.src = breakfastItems[i].imagePath
        newSection.appendChild(newImg);
        body[0].appendChild(newSection)
        newSection.id = ("menu")
    }
});

lunchBtn.addEventListener("click", function () {
    menuItemClick(lunch, this);
});

dinnerBtn.addEventListener("click", function () {
    menuItemClick(dinner, this);
});

drinksBtn.addEventListener("click", function () {
    menuItemClick(drinks, this);
});

dessertBtn.addEventListener("click", function () {
    menuItemClick(dessert, this);
});
