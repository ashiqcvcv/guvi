/*Simple Event handler:
---------------------
Summary: Create a div and change the color onmouse over
Time to complete: About 15 minutes.*/

var div = document.createElement("div");
document.body.style.background = "whilte";
div.setAttribute("id", "bgchange");
div.textContent = "roll over me";
document.body.appendChild(div);
bgchange.addEventListener("mouseover", colourbg);
bgchange.addEventListener("mouseout", normalbg);

function colourbg() {
    document.body.style.background = "red";
}

function normalbg() {
    document.body.style.background = "white";
}