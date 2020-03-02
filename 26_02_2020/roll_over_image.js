/*Roll over images:
---------------

Time to complete: About 15 minutes.
Summary: Create an image box in which the images will be changing when you hover the box. You have have a list of 6 images.
*/

var image = document.createElement("img");
image.setAttribute("src", "image1.jpg");
image.setAttribute("width", "50%");
image.setAttribute("heigth", "50%");
document.body.appendChild(image);

image.addEventListener("mouseover", imgChange);

var count = 1;

function imgChange() {
    console.log("hi");
    count += 1;
    if (count > 6) {
        count = 1;
    }
    var loc = "image" + count + ".jpg";
    console.log(loc);
    image.setAttribute("src", loc);
}