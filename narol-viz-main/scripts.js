document.addEventListener('DOMContentLoaded', () => {
    // Select all anchor links with a hash in the href attribute
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default link behavior
            
            // Get the target element
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
// Function to copy text to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert("Vágolapra másolva: " + text);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

// Event listeners for the entire info-card box
document.getElementById('email-card').addEventListener('click', function() {
    const emailText = this.querySelector('p').textContent;
    copyToClipboard(emailText);
});

document.getElementById('phone-card').addEventListener('click', function() {
    const phoneText = this.querySelector('p').textContent;
    copyToClipboard(phoneText);
});

// Function to detect if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Add or remove a class when the element is in the viewport
function handleScroll() {
    const elements = document.querySelectorAll('.hover-effect');
    elements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('in-view');
        } else {
            element.classList.remove('in-view');
        }
    });
}

// Listen for scroll events
window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', handleScroll);


document.querySelectorAll('.hover-effect').forEach(element => {
    element.addEventListener('touchstart', () => {
        element.classList.add('in-view');
    });

    element.addEventListener('touchend', () => {
        element.classList.remove('in-view');
    });
});
