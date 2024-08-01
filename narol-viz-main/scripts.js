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
document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth <= 768) { // Apply script for small screens only
        const serviceItems = document.querySelectorAll('.service-item');
        
        window.addEventListener('scroll', () => {
            serviceItems.forEach(item => {
                const rect = item.getBoundingClientRect();
                const inViewport = rect.top <= window.innerHeight && rect.bottom >= 0;
                
                // Apply scroll-active class when element is in viewport
                if (inViewport) {
                    item.classList.add('scroll-active');
                } else {
                    item.classList.remove('scroll-active');
                }
            });
        });
    }
});
