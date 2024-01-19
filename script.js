function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
let item1 = document.getElementById("item1");


item1.textContent = "hello";
let button = document.getElementById("button");
button.textContent = "CLICK ME";
let vari = 10
button.addEventListener("mouseleave",function(){
    button.style.fontSize = vari+"px"
    vari = vari + 10
})
let colors = ["red","orange","yellow","green","blue","pink","purple"];
button.addEventListener("click",function(){
    if (colornumber == 7){
        colornumber = 0;
    }
    button.style.color = colors[colornumber]
    colornumber++
    vari = 15
    button.style.fontSize = vari+"px"
    button.textContent = "good,you clicked me";
})

let colornumber = 0;
window.addEventListener ("keydown",function(event){
    if(event.key == "a"||event.key == "A"){
        if (colornumber == 7){
            colornumber = 0;
        }
        
        button.style.color = colors[colornumber]
        sleep(100)
        colornumber++
    }
    
})
window.addEventListener ("keydown",function(event){
    if(event.key == "d"||event.key == "D"){
        while (true){
        if (colornumber == 7){
            colornumber = 0;
        }
        button.style.color = colors[colornumber]
        colornumber++
    }
    }
    
})
window.addEventListener("load",function(){
    alert("page loaded")
})
// let title = document.getElementsById("title");
const fruits = ["apple","orange","pear","grape"];
let items = document.getElementsByTagName("li");
for(let i = 0; i < items.length; i++){
    items[i].style.backgroundColor="yellow";
}
class Student{
    constructor(name,grade,gpa){
        this.name = name;
        this.grade = grade;
        this.gpa = gpa;
    
    }
}
let timmy = new Student("Timmy",12,5)
console.log("Timmy's GPA is",timmy.gpa)
