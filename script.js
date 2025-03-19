document.addEventListener("DOMContentLoaded", function () {
    const carouselContainer = document.querySelector(".carousel-images");
    const slides = Array.from(carouselContainer.children);
    let index = 0;

    // Function to update the carousel
    function showSlide(direction) {
        // Pause the current video if it's a video
        const currentSlide = slides[index];
        if (currentSlide.tagName === "VIDEO") {
            currentSlide.pause();
        }

        // Update index
        if (direction === "next") {
            index = (index + 1) % slides.length;
        } else {
            index = (index - 1 + slides.length) % slides.length;
        }

        // Move the carousel
        const offset = -index * 100;
        carouselContainer.style.transform = `translateX(${offset}%)`;

        // Play the new video if it's a video
        const newSlide = slides[index];
        if (newSlide.tagName === "VIDEO") {
            newSlide.play();
        }
    }

    // Event listeners for navigation
    document.querySelector(".next").addEventListener("click", () => showSlide("next"));
    document.querySelector(".prev").addEventListener("click", () => showSlide("prev"));
});




document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("invert-toggle");
    const body = document.body;

    // Check if inversion mode was saved in localStorage
    if (localStorage.getItem("inverted") === "true") {
        body.classList.add("inverted");
    }

    // Toggle inversion mode when button is clicked
    toggleButton.addEventListener("click", function () {
        body.classList.toggle("inverted");

        // Save the user's preference in localStorage
        localStorage.setItem("inverted", body.classList.contains("inverted"));
    });
});

document.querySelector('.circle-toggle').addEventListener('click', function() {
    this.classList.toggle('active'); // Toggle inversion
});

