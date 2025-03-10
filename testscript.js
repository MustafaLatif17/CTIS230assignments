
const myitem = document.getElementById("firsttest");

myitem.addEventListener("click", () => {
    myitem.style.color = "green";
    myitem.style.fontSize = "22px";
    myitem.style.backgroundColor = "lightgrey";
    myitem.style.transition = "all 0.4s ease-in-out";
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
        otheritem.style.transition = "all 0.3s ease-in-out";
    });
}

const secondButton = document.getElementById("secondbutton");
const secondItem = document.getElementById("secondtest");

if (secondButton) {
    secondButton.addEventListener("click", () => {
        secondItem.style.color = "blue";
        secondItem.style.textTransform = "uppercase";
        secondItem.style.transition = "all 0.3s ease-in-out";
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


const subscribeButton = document.getElementById("subscribeButton");
const emailInput = document.getElementById("emailInput");

if (subscribeButton && emailInput) {
    subscribeButton.addEventListener("click", () => {
        if (emailInput.value.trim() !== "") {
            alert("Thank you for subscribing! Updates will be sent to " + emailInput.value);
            emailInput.value = "";
        } else {
            alert("Please enter a valid email address.");
        }
    });
}
