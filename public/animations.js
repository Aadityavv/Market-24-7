const buttons = document.querySelectorAll("#signIN, #signUP, #responseButton");

buttons.forEach(button => {
    button.addEventListener("mouseover", () => addHoverEvent(button));
    button.addEventListener("mouseout", () => removeHoverEvent(button));
});

function addHoverEvent(button) {
    button.style.transform = "scale(1.05)";
    button.style.transition = "transform 0.5s ease";
    button.style.backgroundColor = "#28336b";
}

function removeHoverEvent(button) {
    button.style.transform = "scale(1)";
    button.style.transition = "transform 0.5s ease";
    button.style.backgroundColor = "transparent";
}

$(document).ready(function() {
    var textArray = ["Your Market Your Way", "One step Solution for all your needs", "Clothings, Electronics, Groceries and more"];
    var textElement = $("#slogan");
    var timeline = gsap.timeline({repeat: -1});

    textArray.forEach(function(element) {
        timeline.to(textElement, {duration: 0.5, opacity: 0, onComplete: function() {
            textElement.text(element);
        }})
        .to(textElement, {duration: 0.5, opacity: 1})
        .to(textElement, {duration: 0.5, opacity: 1, delay: 1});
    });
});