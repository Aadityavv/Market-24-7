document.addEventListener("DOMContentLoaded", () => {
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

    // Initialize GSAP timeline for slogan animation
    var textArray = ["Your Market Your Way", "One step Solution for all your needs", "Clothings, Electronics, Groceries and more"];
    var textElement = $("#slogan");
    var timeline = gsap.timeline({ repeat: -1 });

    textArray.forEach(function(element) {
        timeline.to(textElement, { duration: 0.5, opacity: 0, onComplete: function() {
            textElement.text(element);
        }})
        .to(textElement, { duration: 0.5, opacity: 1 })
        .to(textElement, { duration: 0.5, opacity: 1, delay: 1 });
    });

    // Load theme from localStorage
    function loadTheme() {
        const theme = localStorage.getItem('theme');
        if (theme === 'light') {
            $('body').addClass('light-theme');
            $('#toggleTheme').text('Dark Mode');
            $('body').css({'background-color': 'white', 'color': 'black'});
            $('input').css({'color': 'black'});
            $('#toggleTheme').css({'color': 'black'});
        } else {
            $('body').removeClass('light-theme');
            $('#toggleTheme').text('Light Mode');
            $('body').css({'background-color': '#0C1A2E', 'color': 'white'});
            $('input').css({'color': 'white'});
            $('#toggleTheme').css({'color': 'white'});
        }
    }

    // Call loadTheme on page load
    loadTheme();

    // Toggle theme functionality
    $('#toggleTheme').on('click', function() {
        if ($('body').hasClass('light-theme')) {
            $('body').removeClass('light-theme');
            $(this).text('Light Mode');
            $('body').css({'background-color': '#0C1A2E', 'color': 'white'});
            $('input').css({'color': 'white'});
            $('#toggleTheme').css({'color': 'white'});
            $('*').css({'color':'white'})

            localStorage.setItem('theme', 'dark');
        } else {
            $('body').addClass('light-theme');
            $(this).text('Dark Mode');
            $('body').css({'background-color': 'white', 'color': 'black'});
            $('input').css({'color': 'black'});
            $('#toggleTheme').css({'color': 'black'});
            $('*').css({'color':'black'})
            $('p').css({'color':'black'})
            localStorage.setItem('theme', 'light');
        }
    });
});
