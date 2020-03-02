/* Simple DOM manipulation:
------------------------

Summary: Create 2 div with text "I am div1" & "I am div2" and a button. On click of the button the text of the two divs has to be swapped.
Time to complete: About 20 minutes. */

var div1 = document.createElement("div");
var div2 = document.createElement("div");
var butt = document.createElement("button");

div1.setAttribute("id", "divi1");
div2.setAttribute("id", "divi2");
butt.setAttribute("id", "butto");

document.body.appendChild(div1);
document.body.appendChild(div2);
document.body.appendChild(butt);

divi1.textContent = "hi i am div 1";
divi2.textContent = "hi i am div 2";
butto.textContent = "click me to swap";

butt.addEventListener("click", swap);

function swap() {
    var temp = divi1.textContent;
    divi1.textContent = divi2.textContent;
    divi2.textContent = temp;
}