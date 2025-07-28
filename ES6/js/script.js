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




