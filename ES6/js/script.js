var newElement = document.createElement("div");
var h2Element = document.createElement("h2");

document.body.appendChild(newElement);
newElement.appendChild(h2Element);

newElement.setAttribute("class","t");

 newElement.setAttribute("id","test");

 var textinside = document.createTextNode("welcome from js");
 var h2test = document.createTextNode("big h2 text");


newElement.appendChild(textinside)
h2Element.appendChild(h2test);
newElement.style.backgroundColor= "tomato";


newElement.removeChild(h2Element);


newElement.classList.add("m");
newElement.classList.add("p");

var test = newElement.classList.contains("new")

console.log(test);


function sayHello (name="user" , age=0)
{
    console.log(`hello ${name} you age is: ${age}`)
}

sayHello("ziad mohamed", 20)
sayHello();

let helloText = "Hello World";
let smallParagraphy = "Lorem ipsum dolor sit amet";
let span = "Quae nobis placeat";

let htmlCode = `
<div class="item">
<h1>${helloText}</h1>
<p>${smallParagraphy}, consectetur adipisicing elit.<span>${span}</span> exercitationem aspernatur maiores. Et harum atque deserunt similique voluptate.</p>
</div>
`
console.log(htmlCode);


let nums = [ 10, 20, 30, 40, 50, 60 ]
console.log(nums);
console.log(...nums);

let oldFriends = ["ziad", "mohamed", "mai"]
let newFriends = ["Yara", "Mariam", "Loaa"]
let allFriends = ["shahd", ...oldFriends , ...newFriends  ,"ail"]
console.log(allFriends);

let person = {
    name:"ziad",
    age:20,
    career:"fall-stack",
    son:{
        sonName:"ody",
        age:4,
    
    }
}

let {name:pesonName , career, son:{sonName}} = person;

console.log(pesonName)

console.log(career)

console.log(sonName)


let itimembers = ["ziad", "yara", "mohamed", "ahmed"];

let [ var1,var2] = itimembers;
console.log(var1,var2)

document.body.addEventListener("click", function()
{
    console.log(this);
})

let sum = (num1,num2) => num1+num2

console.log(sum(10 , 80));

let numz  = [10,20,30,40,50]

for (let num of numz)
{
    console.log(num)
}

let user = {
    fname: "ziad",
    age: 20,
    career:"full-stack development"
}

// regular object 

for (let att in user )
{
    console.log(att); // key
    console.log(user[att]) // value 
}

let result = numz.map(function(num)
{
    return num + 100;
})

console.log(result)

let users = [
    {fName: "ziad", age: 18, salary: 5000},
    {fName: "ali", age: 20, salary: 2000},
    {fName: "mohamed", age: 25, salary: 6000}
]

let rsalary = users.map((user)=> console.log(`welocme ${user.fName} your salay is: ${users[0].salary} $ us`))

console.log(rsalary
)

let newnumz = numz.filter((num)=> num > 20);

console.log(newnumz)


let userInfos = [
    {email: "test1@email.com", password: "102030"},
    {email: "zizom5742@gmail.com", password: "1020"},
    {email: "test3@email.com", password: "1050"},
    {email: "test4@email.com", password: "3020"},
    {email: "test5@email.com", password: "4060"},
]

let userfind = userInfos.find((user) => user.email === "zizom5742@gmail.com"  && user.password == 1020 )
console.log(userfind)

