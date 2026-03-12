//secelcting the elements from DOM
const form = document.getElementById("feedback-form");
const nameinput = document.getElementById("name");
const emailInput = document.getElementById("email");
const commentsInput = document.getElementById("comments");


const charCount = document.getElementById("char-count");
const feedbackDisplay = document.getElementById("feedback-display");

//character count event
commentsInput.addEventListener("input" , function() {
    let length = commentsInput.ariaValueMax.length;
    charCount.textContent = length;
});
//tooltip events

nameinput.addEventListener("mouseover" , function() {
    document.getElementById("name-tip").style.display = "inline";
});


nameinput.addEventListener("mouseout" , function() {
    document.getElementById("name-tip").style.display = "none";
});

emailInput.addEventListener("mouseover" , function() {
    document.getElementById("email-tip").style.display = "inline";
});

emailInput.addEventListener("mouseout" , function() {
    document.getElementById("email-tip").style.display = "none";
});

//form submission
form.addEventListener("submit" , function(event) {
    event.preventDefault();

    //validating
    if (nameinput.value === "" || emailInput.value === "" || commentsInput.value === "")
        alert("Please fill out all fields.");
    return;
})


//creating feedback entry
let newFeedback = document.createElement("div");
newFeedback.classList.add("feedback-entry");

newFeedback.textContent = 
nameinput.value + " (" + emailInput.value + "): " + commentsInput.value;

//Adding to page
feedbackDisplay.appendChild(newFeedback);

//Clearing form
form.reset();
charCount.textContent = 0;


document.body.addEventListener("click" , function() {
    console.log("Body Clicked");
});
form.addEventListener("click" , function(event) {
    event.stopPropagation();
});