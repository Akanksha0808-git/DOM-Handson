//--------Q1 -Write the code to access element which is having id as "text"---------
let first =document.getElementById("text");
first.innerText = "Hello, world!";

//-----Q2-Write the code to access element which is having class as "box"------
const element = document.getElementsByClassName("box")[0];
element.innerHTML='hello akanksha';
element.style.fontSize='40px'
element.style.color='purple'
element.style.textAlign='center'
console.log(element.textContent);

//--------Q3- Write the code to access element which is having tag as "h1"--------
const element1 = document.getElementsByTagName("h1")[1];
element1.textContent = "Hello, world!";




// ------Q4-<h1>Hello</h1>Change the heading from ""Hello"" to ""Hello World"" using DOM functions"-----
function changeText1(){
    let heading=document.getElementById('text')
    heading.innerHTML= "Hello World";
    heading.style.color='yellow'
}

//------Q5 - Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"------


function replaceText() {
    let content = document.getElementById("content");
    content.innerHTML = "Welcome to Elevation academy";
    content.style.color = "Purple";

}

// Q6-----
function addAttributes(){
let h1Element=document.querySelector("h1");
h1Element.setAttribute("style", "color: red");
h1Element.setAttribute("id", "heading");
;
}


// ------Q-7-------
function changeFlexDirection() {
    var container = document.getElementById("container");
    if (container.style.flexDirection === "row") {
        container.style.flexDirection = "column";
    } else {
        container.style.flexDirection = "row";
    }
}



// Q9------

let display =document.querySelectorAll('h1');
 display[5].addEventListener('click',()=>{
    function startClock(){
        let time = new Date();
        let hrs = time.getHours();
        let mins = time.getMinutes();
        let secs= time.getSeconds();
        let AMPM ="AM";
        console.log("hello")
        if(hrs>12){
            hrs -=12;
            AMPM="PM"
        }
    console.log(`Time : ${hrs}:${mins}:${secs}`);
    display[6].innerHTML=`${hrs}:${mins}:${secs}`
    }
    setInterval(()=>{
        startClock();
        //  console.log('Hello Everyone')
        },1000)
    })

   





