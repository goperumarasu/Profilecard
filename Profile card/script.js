// script.js

const teamSlider = document.querySelector('.team-slider');

// Function to handle touch events
let startX;

teamSlider.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

teamSlider.addEventListener('touchmove', (e) => {
    const moveX = e.touches[0].clientX;
    const diffX = startX - moveX;

    if (diffX > 0) {
        // Swiping left
        teamSlider.scrollLeft += 50; // Adjust scroll amount
    } else {
        // Swiping right
        teamSlider.scrollLeft -= 50; // Adjust scroll amount
    }

    startX = moveX;
});
