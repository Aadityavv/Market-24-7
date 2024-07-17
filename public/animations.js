const signinButton = document.getElementById("signIN");
const signupButton = document.getElementById("signUP");
console.log(`hi`)

signinButton.addEventListener("mouseover",function(event){
    addHoverEvent(signinButton);
})
signupButton.addEventListener("mouseover",function(event){
    addHoverEvent(signupButton);
})
signinButton.addEventListener("mouseout",function(event){
    removeHoverEvent(signinButton);
})
signupButton.addEventListener("mouseout",function(event){
    removeHoverEvent(signupButton);
})

function addHoverEvent(button){
    button.style.transform = "scale(1.1)";
    button.style.transition = "transform 0.5 ease"
    button.style.backgroundColor = "#324c74"
}
function removeHoverEvent(button){
    button.style.transform = "scale(1)";
    button.style.transition = "transform 0.5 ease"
    button.style.backgroundColor = "transparent"
}