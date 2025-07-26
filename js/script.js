var person = {
    name:"ziad mohamed",
    age:20,
    career:"full-stack",

    marketing:{

        contentCereation:"in progress",
        copywriting: "learned",
        videoEditing:"in progress" ,
        test:123
        
    },

    addNew:function(newskil)
    {
        person.marketing.newskil=newskil;
    }

};


person.addNew("seo")
console.log(person)

delete person.marketing.test;

console.log(person);

var objectToString = JSON.stringify(person);

console.log( JSON.parse(objectToString) );

var personarry = ["ziad", 20,"fayoum" , "single"];

console.log(personarry)
console.log("length of array is: ",personarry.length)

console.log(typeof personarry)

console.log(personarry[2])

for(var i=0;i<personarry.length;i++)
{
    console.log(personarry[i]);
}

var char = ['z','t','q','c'];

char.sort();

console.log(char)

char.push('a')
console.log(char)


console.log(char.pop())
console.log(char)
char.unshift('a')

console.log(char)

char.shift()
console.log(char)

char.splice(1,2,'d','u');
console.log(char)

var subchar= char.slice(1,3)
console.log(subchar)

var rchar=char.reverse();

console.log(rchar)

var s = char.includes('z');


console.log(s)

var index= char.indexOf('z')

console.log(index) // call by value not refrance :)

var tchar = ['z','t','q','z','c','z'];

console.log(tchar.lastIndexOf('z'))

var schar =char.toString();

console.log(schar);

var st ="web development";

console.log(st.slice(4)) // هتاخد من 4 لحد الاخر 



console.log(st.concat(" ","is a hight encome skill"))

var csta = st.split(" ");// ابدا من الاول واول ما تشوف ال " " امسك كل الي جمعته حطه في الانديكس 0 



console.log(csta.join("$")) // join بتخليني اقدر احول الاراي الي string 


var st ="z web  z development z is z great";

console.log(st.replace('z','x'))
console.log(st.replaceAll('z','x'))

var element = document.getElementById("demo"); // بترجع عنصر واحد عن طريق الايدي || HTML Collection

var elements = document.getElementsByClassName("item"); // بترجع مجموعة عناصر عن طريق الكلاس || HTML Collection

console.log(elements);
console.log(typeof elements);


var headings = document.querySelectorAll("h2")

console.log(headings)

// document.body.addEventListener("click",function(e){
//     console.log(e)
// })

document.body.addEventListener("keydown",function(e){
    console.log(e.key)
})

var input = document.querySelector("input");

input.addEventListener("focus",function(){

    console.log("hello ziad");
})

document.addEventListener("keydown",function(e){

    if (e.key=='z')
    {
        window.alert("hi ziad")
    }

})

document.querySelector("h2").innerText= "ziad mohamedd";


var test = document.createElement("div")

document.body.appendChild(test)

test.setAttribute("class","ziad")
test.setAttribute("id","z")

var newtext= document.createTextNode("hello world");

test.appendChild











