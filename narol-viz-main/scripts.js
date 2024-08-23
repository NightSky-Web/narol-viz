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
