
const myitem = document.getElementById("firsttest");


myitem.addEventListener("click", () => {
    myitem.style.color = "green";
    myitem.style.fontSize = "20px";
    myitem.style.backgroundColor = "lightgrey";
});


myitem.addEventListener("mouseout", () => {
    myitem.style.color = "";
    myitem.style.fontSize = "";
    myitem.style.backgroundColor = "";
});


const thebutton = document.getElementById("thebutton");
const otheritem = document.getElementById("buttontest");


if (thebutton) {
    thebutton.addEventListener("click", () => {
        otheritem.style.color = "red";
        otheritem.style.fontWeight = "bold";
    });
}


const secondButton = document.getElementById("secondbutton");
const secondItem = document.getElementById("secondtest");

if (secondButton) {
    secondButton.addEventListener("click", () => {
        secondItem.style.color = "blue";
        secondItem.style.textTransform = "uppercase";
    });
}


const textentry = document.getElementById("myinput");

if (textentry) {
    textentry.addEventListener("change", () => {
        const newText = textentry.value;
        otheritem.innerHTML = newText;
    });
}


const toggleButton = document.getElementById("toggleMode");
const body = document.body;

if (toggleButton) {
    toggleButton.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
    });
}