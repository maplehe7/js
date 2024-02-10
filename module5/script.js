const newLi = document.createElement("li");
newLi.textContent = "chocolates";
const newLis = document.createElement("li");
newLis.textContent = "suga";
const ul = document.querySelector("ul");
ul.appendChild(newLi)
ul.appendChild(newLis)
const first_li = document.querySelector("ul li:first-of-type")

ul.insertBefore(newLi,first_li)
ul.appendChild(newLi,first_li)
newImg = document.createElement("img")
newImg.src ="https://www.calgiant.com/wp-content/uploads/2021/08/berry-iso-straw-1-878x1024.png"
const body = document.querySelector("body")
body.appendChild(newImg)
let student = {
    firstname:"Maya",
    lastname:"He",
    age:"12",
    gpa:"0.00000000000000000001",
    grade:"7",
    printName: function(){
        console.log(this.firstname + " "+ this.lastname)
    }

}
student.printName()
class students{
    constructor(firstname,lastname){
        this.firstname = firstname
        this.lastname = lastname
        this.age = 100
        this.gpa = 0.0
        this.grade = 99
    }
}
let student1 = new students("bob","thebuilder")


let student2 = new students("boby","thebuildery")

if(student2.age > 50){
    console.log("ur old")
}
else{
    console.log("ur not too old")
}
student2.age > 50 ? console.log : console.log("ur not old")

let age = 1;
age < 0 ? age+=4 : console.log(age);
function add(a,b){
    return a+b
}
add(50,50)
let add2 = (a,b) => a +b
add2(50,50)
let stuff = (name,age) => console.log("hi my name is ${name} and I am ${age}.")
stuff.name = "dora"
stuff.age = "2929"