
//alert("hello");
//console.log(window);
//console.log("hello");
//window.console.log("hello");//console.log is a part of our window object
//we never write window object key value pair,why bcoz it is global object
//window.alert("hello");//we can create alert like this also

//console.dir(document.body);
//console.dir(document.body.childNodes[1]);
//we can access all html code in JS(h1 p button),all html element
//gets converted into object when comes in js that special object is named as 
//document.this document is available in window object jo hamesha rehti he 

//--------------------------------------------------------------------------------------------------

//DOM Manipulation
//make change to html 
/* <body>
    <h1 class="myClass">Lets learn JS</h1>
    <p > We are learning html,css & JS</p>
    <button id="myId">click Me</button>
</body> */

//1. Selecting with id:
//document.getElementById("myId")
// let button= document.getElementById("myId");
// console.dir(button);

//2. Selecting with Class:
//document.getElementByClassName("myClass")
// let heading = document.getElementsByClassName("myClass");
// console.dir(heading);

//3.Selecting with tag
//document.getElementByTagName("p")
// let element = document.getElementsByTagName("p");
// console.dir(element);

//--------------------------------------------------------------------------------------------------

//Query Selector:(First Element Return karta hai)
//document.querySelector("myId/myClass/tag");

// let firstElement=document.querySelector("p");
// console.dir(firstElement);

// let idElement=document.querySelector("#myId");
// console.dir(idElement);

// let classElement=document.querySelector(".myClass");
// console.dir(classElement);

// let allElement=document.querySelectorAll("p");
// console.dir(allElement);

//--------------------------------------------------------------------------------------------------

//Properties in DOM

//1. tagName : returns tag for element nodes

// let firstElement = document.querySelector("p");
// console.dir(firstElement);

//2. innerText : returns the text content of the element and all its children

// let div = document.querySelector("div");
//     console.dir(div);

//3. innerHTML : returns the plain text or HTML contents in the element

//4. textContent : returns textual content even for hidden elements
// let heading = document.querySelector("h1");

//--------------------------------------------------------------------------------------------------

//Ex

//Q. create a h2 heading element with text "hello javascript" append from nass student to this text using java script(append means to add in last)

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText = h2.innerText + " from nass student";
// console.dir(h2.innerText);

//----------------------------------------------------------------------------------------------------

//Attributs in js

// let div = document.querySelector("div");
// console.log(div);
// let id = div.getAttribute("id");
// console.log(id);

// let para = document.querySelector("p");
// console.log(para.setAttribute("class","NewClass"));


// let div = document.querySelector("div");
// div.style.backgroundColor="green";
// div.style.fontStyle="30px";
// div.innerText="hello";


//Insert element 

// let newbtn = document.createElement("button");
// newbtn.innerText = "click me";
// console.log(newbtn);

//1. node.append(el)
// let div = document.querySelector("div");
// div.append(newbtn);

//2. node.prepend
// div.prepend(newbtn);

//3. node.before
// div.before(newbtn);

//4. node.after
// div.after(newbtn);

//Delete element
// let para = document.querySelector("p");
// para.remove();

//question


































//practice question

// let newbtn = document.querySelector("button");
// newbtn.innerText = "click me";
// newbtn.style.color = "white";
// newbtn.style.backgroundColor = "red";
// document.querySelector("body").prepend(newbtn);