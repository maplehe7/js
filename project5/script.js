// Variables
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

// Menu Class
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
        p[1].textContent = "$"+this.price;
    }
}

const breakfast = new Menu("Pizza", "Good pizza you should buy", 10.99, "https://i.ytimg.com/vi/LrTKeT8xBRg/maxresdefault.jpg"); 
const lunch = new Menu("Burger", "Yummy burger with fries", 12.99, "https://www.foodandwine.com/thmb/fIHZWJjIDYElmCYrp9LpS1jIIF8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/worlds-largest-burger-complete-FT-BLOG0717-897f463351be4036bc94bc18069dce6e.jpg"); 
const dinner = new Menu("Pasta", "yummy pasta with alferado sauce", 14.99, "https://www.ocregister.com/wp-content/uploads/migration/kz7/kz71ni-b78616343z.120100312160447000g4nn668h.1.jpg?w=620");
const drinks = new Menu("Smoothie", "yummy fruit smoothie", 5.99, "https://www.worldrecordacademy.com/drinks/img/215451_largest_smoothie_McGill.jpg");
const dessert = new Menu("Cheesecake", "yummy cheesecake with strawberries", 8.99, "https://hips.hearstapps.com/delish/assets/cm/15/10/54f63b66d0a6c_-_worlds-largest-cheesecake-xl.jpg");



window.addEventListener("load", () => {
    breakfast.display();
    breakfastBtn.style.textDecoration = "underline"; 
    lunchBtn.style.textDecoration = ""; 
    dinnerBtn.style.textDecoration = "";
    drinksBtn.style.textDecoration = "";
    dessertBtn.style.textDecoration = "";
});


breakfastBtn.addEventListener("click", function () {
    breakfast.display();
    this.style.textDecoration = "underline"; 
    lunchBtn.style.textDecoration = ""; 
    dinnerBtn.style.textDecoration = "";
    drinksBtn.style.textDecoration = "";
    dessertBtn.style.textDecoration = "";
});

lunchBtn.addEventListener("click", function () {
    lunch.display();
    this.style.textDecoration = "underline"; 
    breakfastBtn.style.textDecoration = ""; 
    dinnerBtn.style.textDecoration = "";
    drinksBtn.style.textDecoration = "";
    dessertBtn.style.textDecoration = "";
});

dinnerBtn.addEventListener("click", function () {
    dinner.display();
    this.style.textDecoration = "underline"; 
    breakfastBtn.style.textDecoration = ""; 
    lunchBtn.style.textDecoration = "";
    drinksBtn.style.textDecoration = "";
    dessertBtn.style.textDecoration = "";
});

drinksBtn.addEventListener("click", function () {
    drinks.display();
    this.style.textDecoration = "underline"; 
    breakfastBtn.style.textDecoration = ""; 
    lunchBtn.style.textDecoration = "";
    dinnerBtn.style.textDecoration = "";
    dessertBtn.style.textDecoration = "";
});

dessertBtn.addEventListener("click", function () {
    dessert.display();
    this.style.textDecoration = "underline"; 
    breakfastBtn.style.textDecoration = "";
    lunchBtn.style.textDecoration = "";
    dinnerBtn.style.textDecoration = "";
    drinksBtn.style.textDecoration = "";
});