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
function clearSections(){
    let allSections = document.querySelectorAll("section")
    for(let i = 0; i < allSections.length; i++){
        allSections[i].remove()
    }
}
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
    new FoodItem("Scrambled Eggs", "yummy scrambled eggs with cheese and those green things", 7.99, "https://p2crires.cri.cn/01dcri/images/zhycms_chinaplus/20190520/33a8fe16-39b3-4d7c-92bd-0b11427a8980.jpg?x-oss-process=image%2Fresize%2Cw_720%2Ch_405"),
    new FoodItem("Pancakes", "yummy pancakes w/ mysterious golden yummy stuff", 8.99, "https://news.am/img/news/69/69/71/default.jpg"),
]
lunchItems = [
    new FoodItem("Burger", "yummy burger with fries", 12.99, "https://www.foodandwine.com/thmb/fIHZWJjIDYElmCYrp9LpS1jIIF8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/worlds-largest-burger-complete-FT-BLOG0717-897f463351be4036bc94bc18069dce6e.jpg"),
    new FoodItem("Pasta", "yummy pasta with alfredo sauce", 14.99, "https://www.ocregister.com/wp-content/uploads/migration/kz7/kz71ni-b78616343z.120100312160447000g4nn668h.1.jpg?w=620"),
    new FoodItem("Salad", "yummy salad with big green vegetables", 9.99, "https://i.pinimg.com/originals/84/49/9b/84499bd64bf03b9440c7bff2241a8c34.jpg")

]
dinnerItems = [
    new FoodItem("Steak", "yummy steak with greatest vegetables", 24.99, "https://i.ytimg.com/vi/EkcOLINfM5c/maxresdefault.jpg"),
    new FoodItem("Salmon", "yummy salmon with a lemon butter sauce", 22.99, "https://i0.wp.com/fishwithjd.com/wp-content/uploads/2016/11/15134547_10207822475781315_5683356838567009819_n.jpg?resize=680%2C492&ssl=1"),
    new FoodItem("Egg Stir Fry", "yummy stir fry with un-rotten vegetables and sweet soy sauce", 16.99, "https://largefamilytable.com/wp-content/uploads/2016/06/Jamerrills-Large-Family-Stir-Fry-Fried-Rice.jpg")

    
]
// const breakfast = new Menu("Pizza", "Good pizza you should buy", 10.99, "https://i.ytimg.com/vi/LrTKeT8xBRg/maxresdefault.jpg");
// const lunch = new Menu("Burger", "Yummy burger with fries", 12.99, "https://www.foodandwine.com/thmb/fIHZWJjIDYElmCYrp9LpS1jIIF8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/worlds-largest-burger-complete-FT-BLOG0717-897f463351be4036bc94bc18069dce6e.jpg");
// const dinner = new Menu("Pasta", "yummy pasta with alferado sauce", 14.99, "https://www.ocregister.com/wp-content/uploads/migration/kz7/kz71ni-b78616343z.120100312160447000g4nn668h.1.jpg?w=620");
// const drinks = new Menu("Smoothie", "yummy fruit smoothie", 5.99, "https://www.worldrecordacademy.com/drinks/img/215451_largest_smoothie_McGill.jpg");
// const dessert = new Menu("Cheesecake", "yummy cheesecake with strawberries", 8.99, "https://hips.hearstapps.com/delish/assets/cm/15/10/54f63b66d0a6c_-_worlds-largest-cheesecake-xl.jpg");

function menuItemClick(menu, button) {
    //menu.display();
    
}


window.addEventListener("load", () => {
    createBreakfast()
 
});
function createBreakfast(){
    breakfastBtn.style.textDecoration = "underline";
    lunchBtn.style.textDecoration = "";
        clearSections()
        //menuItemClick(breakfast, this);
        for(let i = 0; i < breakfastItems.length; i++){
            let newSection = document.createElement("section")
            let newDiv = document.createElement("div")
            let newImg = document.createElement("img")
            let newTitle = document.createElement("h2")
            let newDescription = document.createElement("p")
            let newPrice = document.createElement("p")
            newImg.src = breakfastItems[i].imagePath
            newTitle.textContent = breakfastItems[i].name
            newDescription.textContent = breakfastItems[i].description
            newPrice.textContent = "$" + breakfastItems[i].price
            newDiv.appendChild(newTitle); 
            newDiv.appendChild(newDescription);
            newDiv.appendChild(newPrice);
            newSection.appendChild(newImg);
            newSection.appendChild(newDiv); 
            body[0].appendChild(newSection)
            newSection.id = ("menu")
        
        };
}
breakfastBtn.addEventListener("click", function () {
    createBreakfast()
})

lunchBtn.addEventListener("click", function () {
    clearSections()
    breakfastBtn.style.textDecoration = "";
    lunchBtn.style.textDecoration = "underline";
    //menuItemClick(breakfast, this);
    for(let i = 0; i < lunchItems.length; i++){
        let newSection = document.createElement("section")
        let newDiv = document.createElement("div")
        let newImg = document.createElement("img")
        let newTitle = document.createElement("h2")
        let newDescription = document.createElement("p")
        let newPrice = document.createElement("p")
        newImg.src = lunchItems[i].imagePath
        newTitle.textContent = lunchItems[i].name
        newDescription.textContent = lunchItems[i].description
        newPrice.textContent = "$" + lunchItems[i].price
        newDiv.appendChild(newTitle); 
        newDiv.appendChild(newDescription);
        newDiv.appendChild(newPrice);
        newSection.appendChild(newImg);
        newSection.appendChild(newDiv); 
        body[0].appendChild(newSection)
        newSection.id = ("menu")
    }
});
dinnerBtn.addEventListener("click", function () {
    clearSections()
    breakfastBtn.style.textDecoration = "";
    dinnerBtn.style.textDecoration = "underline";
    //menuItemClick(breakfast, this);
    for(let i = 0; i < dinnerItems.length; i++){
        let newSection = document.createElement("section")
        let newDiv = document.createElement("div")
        let newImg = document.createElement("img")
        let newTitle = document.createElement("h2")
        let newDescription = document.createElement("p")
        let newPrice = document.createElement("p")
        newImg.src = dinnerItems[i].imagePath
        newTitle.textContent = dinnerItems[i].name
        newDescription.textContent = dinnerItems[i].description
        newPrice.textContent = "$" + dinnerItems[i].price
        newDiv.appendChild(newTitle); 
        newDiv.appendChild(newDescription);
        newDiv.appendChild(newPrice);
        newSection.appendChild(newImg);
        newSection.appendChild(newDiv); 
        body[0].appendChild(newSection)
        newSection.id = ("menu")
    }
});



drinksBtn.addEventListener("click", function () {
    menuItemClick(drinks, this);
});

dessertBtn.addEventListener("click", function () {
    menuItemClick(dessert, this);
});
