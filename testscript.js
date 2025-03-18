document.addEventListener("DOMContentLoaded", () => {

    // Text Style Manipulation
    const myItem = document.getElementById("firsttest");
    if (myItem) {
        myItem.addEventListener("click", () => {
            myItem.style.color = "green";
            myItem.style.fontSize = "22px";
            myItem.style.backgroundColor = "lightgrey";
            myItem.style.transition = "all 0.4s ease-in-out";
        });

        myItem.addEventListener("mouseout", () => {
            myItem.style.color = "";
            myItem.style.fontSize = "";
            myItem.style.backgroundColor = "";
        });
    }

    // Button Interactions
    const theButton = document.getElementById("thebutton");
    const otherItem = document.getElementById("buttontest");

    if (theButton && otherItem) {
        theButton.addEventListener("click", () => {
            otherItem.style.color = "red";
            otherItem.style.fontWeight = "bold";
            otherItem.style.transition = "all 0.3s ease-in-out";
        });
    }

    const secondButton = document.getElementById("secondbutton");
    const secondItem = document.getElementById("secondtest");

    if (secondButton && secondItem) {
        secondButton.addEventListener("click", () => {
            secondItem.style.color = "blue";
            secondItem.style.textTransform = "uppercase";
            secondItem.style.transition = "all 0.3s ease-in-out";
        });
    }

    // Update Text Dynamically
    const textEntry = document.getElementById("myinput");
    if (textEntry && otherItem) {
        textEntry.addEventListener("change", () => {
            otherItem.innerHTML = textEntry.value;
        });
    }

    // Dark Mode Toggle with Local Storage
    const toggleButton = document.getElementById("toggleMode");
    if (toggleButton) {
        toggleButton.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
        });

        // Load user preference
        if (localStorage.getItem("darkMode") === "true") {
            document.body.classList.add("dark-mode");
        }
    }

    // Newsletter Subscription
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

    // Expandable GPU Images (Thumbnail Expansion)
    const images = document.querySelectorAll(".expandable");
    images.forEach((img) => {
        img.addEventListener("click", () => {
            img.classList.toggle("expanded");
        });
    });

    // GPU Search Functionality
    const searchBar = document.getElementById("searchBar");
    if (searchBar) {
        searchBar.addEventListener("keyup", () => {
            let filter = searchBar.value.toLowerCase();
            let gpuCards = document.querySelectorAll(".gpu-card");

            gpuCards.forEach((card) => {
                let title = card.querySelector("h2").textContent.toLowerCase();
                if (title.includes(filter)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    }

    // GPU Comparison Table Dropdown Filter
    const gpuSelect = document.getElementById("gpuSelect");
    if (gpuSelect) {
        gpuSelect.addEventListener("change", () => {
            let selectedGPU = gpuSelect.value.toLowerCase();
            let rows = document.querySelectorAll(".gpu-row");

            rows.forEach((row) => {
                let rowGPU = row.dataset.gpu.toLowerCase();
                if (selectedGPU === "all" || rowGPU === selectedGPU) {
                    row.style.display = "table-row";
                } else {
                    row.style.display = "none";
                }
            });
        });
    }
});
