
let button = document.getElementById("submit");

let ratingButton = document.getElementsByClassName("ratings")[0].querySelectorAll("div");

let oldSlide = document.getElementById("first-slide");

let newSlide = document.getElementById("second-slide");

let divText = document.getElementsByTagName("main")[0].getElementsByTagName("div")[0].getElementsByTagName("div")[0];

// After Submission
button.onclick = function () {
    newSlide.removeAttribute("id");
    oldSlide.setAttribute("class", "first-slide-class");
    oldSlide.removeAttribute("id");
    newSlide.setAttribute("class", "new-main");
    divText.textContent = "You selected " + y + " out of 5";
};

// To Store the clicked rating

document.body.addEventListener("click", changeColour);
let y = 0;

function changeColour(e) {
    
    var x = e.target;
    if (x.className === "number") {
        y= x.textContent;

        ratingButton.forEach(button => {
            if (button.textContent === x.textContent) {
                x.style.backgroundColor = "hsl(216, 12%, 54%)";
                x.style.color ="white";
            } else {
                button.style.backgroundColor = "hsl(211, 23%, 21%)";
                button.style.color ="hsl(216, 12%, 54%)";
            }
        });
    }

}