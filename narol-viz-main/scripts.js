document.addEventListener('DOMContentLoaded', function() {
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 800, // Speed of the scroll animation in milliseconds
        offset: 0 // Offset from the top of the page (if needed)
    });
});


document.addEventListener('DOMContentLoaded', () => {
    // Function to scroll to a position smoothly
    const scrollToPosition = (position) => {
        window.scrollTo({
            top: position,
            behavior: 'smooth' // Smooth scrolling
        });
    };

    // Smooth scroll to the top on page refresh
    scrollToPosition(0);

    // Attach click event listeners to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default link behavior

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                scrollToPosition(targetElement.offsetTop - (window.innerHeight / 2) + (targetElement.offsetHeight / 2));
            }
        });
    });

    // Slider logic
    const slidesContainer = document.querySelector('.slides');
    const wrapper = document.querySelector('.slider-wrapper');
    let slideInterval; // Variable to store the interval ID

    // Load images from a JSON file
    fetch('images.json')
        .then(response => response.json())
        .then(images => {
            // Duplicate images to handle continuous looping
            const extendedImages = [...images, ...images, ...images]; // Triple array for smooth infinite loop

            // Render images
            extendedImages.forEach(image => {
                const imgElement = document.createElement('img');
                imgElement.src = `images/${image}`; // Path to images folder
                imgElement.alt = "Slider image";    // Accessibility
                slidesContainer.appendChild(imgElement);
            });

            const imageCount = images.length; // Original image count
            let index = imageCount; // Start in the middle of the duplicated images

            // Set the initial position
            slidesContainer.style.transform = `translateX(${-index * 100}%)`;

            const updateSlidePosition = () => {
                slidesContainer.style.transform = `translateX(${-index * 100}%)`;
            };

            const handleTransitionEnd = () => {
                if (index >= imageCount * 2) {
                    slidesContainer.style.transition = 'none';
                    index = index - imageCount; // Jump back to the start of the original images
                    updateSlidePosition();
                    setTimeout(() => {
                        slidesContainer.style.transition = 'transform 0.8s ease-in-out'; // Re-enable transition
                    }, 20);
                } else if (index < imageCount) {
                    slidesContainer.style.transition = 'none';
                    index = index + imageCount; // Jump to the end of the images
                    updateSlidePosition();
                    setTimeout(() => {
                        slidesContainer.style.transition = 'transform 0.8s ease-in-out'; // Re-enable transition
                    }, 20);
                }
            };

            slidesContainer.addEventListener('transitionend', handleTransitionEnd);

            window.nextSlide = function() {
                index = (index + 1) % (imageCount * 3); // Account for tripled images
                updateSlidePosition();
                resetInterval();
            };

            window.prevSlide = function() {
                index = (index - 1 + (imageCount * 3)) % (imageCount * 3); // Account for tripled images
                updateSlidePosition();
                resetInterval();
            };

            const resetInterval = () => {
                if (slideInterval) {
                    clearInterval(slideInterval);
                }
                slideInterval = setInterval(nextSlide, 3000);  // Change slide every 3 seconds
            };

            // Start the initial slide interval
            resetInterval();
        })
        .catch(error => console.error('Error loading images:', error));
});
