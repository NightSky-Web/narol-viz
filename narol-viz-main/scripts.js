:root {
    --background-color: #121212;
    --text-color: #e0e0e0;
    --header-background: #1f1f1f;
    --header-text: #e0e0e0;
    --section-background: #1e1e1e;
    --btn-background: #444;
    --btn-text: #e0e0e0;
    --service-item-background: #333;
    --btn-hover-bg: #357ab7;
    --contrast-text-color: #e0e0e0;
    --info-card-background: #444;
    --hover-bg: #357ab7;
    --contact-bg-hover: #333;
    --about-bg: #1e1e1e;
    --about-text-color: #e0e0e0;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    line-height: 1.6;
    background-color: var(--background-color);
    color: var(--text-color);
    font-size: 1.2rem;
}

h1, h2, h3, h4, h5, h6 {
    line-height: 1.2;
}

h1 {
    font-size: 3rem;
}

h2 {
    font-size: 2.5rem;
}

h3 {
    font-size: 2rem;
}

p {
    font-size: 1.1rem;
}

.about-text h2 {
    font-size: 2.5rem;
}

.about-text p {
    font-size: 1.1rem;
}

.service-item h3 {
    font-size: 1.8rem;
}

.service-item ul li {
    font-size: 1.1rem;
}

.contact-content h2 {
    font-size: 2.8rem;
}

.contact-content p {
    font-size: 1.1rem;
}

.info-card h3 {
    font-size: 1.8rem;
}

.info-card p {
    font-size: 1.1rem;
}

.btn {
    font-size: 1.1rem;
}

/* Default header styling */
header {
    background: var(--header-background);
    color: var(--header-text);
    padding: 1rem 0;
    text-align: center;
    position: fixed; /* Sticky on larger screens */
    width: 100%;
    top: 0;
    z-index: 1000;
    opacity: 0.9; /* Slightly increased opacity for better visibility */
}
nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

nav ul li {
    display: inline;
    margin: 0 1rem;
}

nav ul li a {
    color: var(--header-text);
    text-decoration: none;
    transition: color 0.3s, transform 0.3s;
}

nav ul li a:hover {
    color: var(--btn-hover-bg);
    transform: scale(1.1);
}

.hero {
    position: relative;
    background: url('header.jpg') no-repeat center center/cover;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: var(--header-text);
    overflow: hidden;
    margin: 0;
}

.hero::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('header.jpg') no-repeat center center/cover;
    z-index: 0;
    transition: filter 0.5s ease-in-out;
}

.hero:hover::before {
    filter: blur(5px) brightness(50%);
}

.hero-content {
    position: relative;
    z-index: 1;
    animation: fadeIn 2s;
    transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
}

.hero:hover .hero-content {
    transform: scale(1.1);
}

#about-us {
    padding: 4rem 2rem;
    background: var(--about-bg);
    text-align: center;
}

.about-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 3rem;
}

.about-text {
    max-width: 100%;
    margin: 0 auto;
    transition: transform 0.5s ease-in-out;
}

.about-text h2 {
    font-size: 2rem;
    color: var(--about-text-color);
    margin-bottom: 1rem;
}

.about-text h2, .about-text p {
    transition: transform 0.5s ease-in-out, text-shadow 0.5s ease-in-out;
}

.about-text:hover h2 {
    transform: scale(1.1);
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.about-text:hover p {
    transform: scale(1.03);
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    color: #fff;
}

/* Basic styles for .about-text p */
.about-text p {
    color: #666; /* Use variable for consistency */
    line-height: 1.6; /* Improve readability */
    max-width: 800px; /* Limit the width for better readability */
    margin: 0 auto; /* Center align paragraphs within their container */
    font-size: 1.3rem; /* Increase base font size */
    transition: font-size 0.3s ease, color 0.3s ease; /* Smooth transitions */
}

/* Basic styles for .about-image */
.about-image {
    position: relative;
    max-width: 100%;
    overflow: hidden;
    border-radius: 8px;
    margin: 0 auto; /* Center align the image */
}

.about-image img {
    width: 100%;
    height: auto;
    transition: transform 0.5s ease, filter 0.5s ease;
}

.about-image .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    color: var(--header-text);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    opacity: 0;
    transition: opacity 0.5s ease;
    font-size: 1.5rem;
}

/* Hover effects for .about-image */
.about-image:hover img {
    filter: blur(5px) brightness(70%);
    transform: scale(1.1);
}

.about-image:hover .overlay {
    opacity: 1;
}

.about-stats {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;
}

.stat {
    background: var(--service-item-background);
    border-radius: 8px;
    padding: 2rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, background 0.3s;
    text-align: center;
    flex: 1;
    max-width: 250px;
}

.stat h3 {
    font-size: 2rem;
    color: var(--contrast-text-color);
    margin: 0;
}

.stat p {
    color: #666;
    margin: 0.5rem 0 0;
}

.stat:hover {
    transform: scale(1.05);
    background: var(--hover-bg);
    color: var(--contrast-text-color);
}

.stat h3,
.stat p {
    transition: transform 0.3s ease-in-out;
}

.stat:hover h3, 
.stat:hover p {
    transform: scale(1.1);
    color: #fff;
}

section {
    padding: 4rem 2rem;
    margin-top: 4rem;
    background: var(--section-background);
    transition: background 0.3s;
}

section:hover {
    background: #e0e0e0;
}

h2 {
    margin-top: 0;
}

ul {
    padding: 0;
    list-style: none;
}

.btn {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    margin-top: 1rem;
    background: var(--btn-background);
    color: var(--btn-text);
    border: none;
    cursor: pointer;
    text-decoration: none;
    transition: background 0.3s, transform 0.3s;
}

.btn:hover {
    background: var(--btn-hover-bg);
    transform: scale(1.05);
}

#services {
    padding: 4rem 2rem;
    background: var(--section-background);
    text-align: center;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
}

.service-item {
    background: var(--service-item-background);
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    transition: transform 0.3s, box-shadow 0.3s, filter 0.3s;
    position: relative;
    overflow: hidden;
}

.service-item ul li {
    color: #666;
    transition: color 0.3s ease;
}

.service-item:hover ul li {
    color: #fff;
}

.service-item:hover {
    background: var(--btn-hover-bg);
}

.service-item h3 {
    margin-top: 0;
    font-size: 1.5rem;
    color: var(--text-color);
}

.service-item ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    color: #666;
}

.service-item ul li {
    margin: 0.5rem 0;
    line-height: 1.5;
}

.service-item:hover {
    transform: scale(1.05);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    z-index: 10;
}

.services-grid::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.1);
    pointer-events: none;
    transition: background 0.3s;
}

.service-item:hover ~ .service-item {
    filter: blur(4px);
}

.service-item:hover ~ .service-item::before {
    background: rgba(0, 0, 0, 0.3);
}

#contact {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
    background: var(--section-background);
    transition: background 0.3s, transform 0.3s;
    padding: 2rem;
}

.contact-content {
    background: #2c2c2c;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: background 0.3s, transform 0.3s;
    text-align: center;
}

.contact-content:hover {
    background: #2e2e2e;
    transform: scale(1.05) translateY(-5px);
}

.contact-content h2 {
    font-size: 2.5rem;
    color: var(--text-color);
    margin-bottom: 1rem;
}

.contact-content p {
    color: #666;
    line-height: 1.6;
    max-width: 800px;
    transition: color 0.3s ease;
}

.contact-content:hover p {
    color: #fff;
}

.contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
}

.info-card {
    background: var(--info-card-background);
    border-radius: 10px;
    padding: 2rem;
    margin: 0.5rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 250px;
    transition: transform 0.3s, box-shadow 0.3s, background 0.3s, color 0.3s;
    position: relative;
    overflow: hidden;
}

.info-card h3 {
    font-size: 1.5rem;
    color: var(--contrast-text-color);
    margin-bottom: 0.5rem;
    transition: color 0.3s;
}

.info-card p {
    font-size: 1rem;
    color: #666;
    margin: 0;
    transition: color 0.3s;
}

.info-card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s ease-in-out, background 0.3s;
    z-index: -1;
}

.info-card:hover::before {
    transform: scaleX(1);
}

.info-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    background: var(--hover-bg);
    color: #fff;
}

.info-card:hover h3,
.info-card:hover p {
    color: #fff;
}

footer {
    background: var(--header-background);
    color: var(--header-text);
    text-align: center;
    padding: 1rem 0;
    border-top: 2px solid var(--btn-hover-bg);
    width: 100%;
    bottom: 0;
    position: relative;
}

footer p {
    margin: 0;
    font-size: 1rem;
}

footer a {
    color: var(--btn-hover-bg);
    text-decoration: none;
    transition: color 0.3s;
}

footer a:hover {
    color: #fff;
    text-decoration: underline;
}

/* Media Queries */
@media (max-width: 1200px) {
    .hero {
        height: 80vh;
    }
}

@media (max-width: 768px) {
    header {
        position: static; /* Make header non-sticky on mobile screens */
        padding: 0.75rem 0;
    }

    /* Ensure navigation items are properly displayed */
    nav ul {
        text-align: center;
    }

    nav ul li {
        display: block;
        margin: 0.5rem 0;
    }

    .hero {
        height: 60vh;
    }

    .hero-content {
        font-size: 1.5rem;
    }

    .about-text h2 {
        font-size: 1.8rem; /* Adjust for smaller screens */
    }

    .about-text p {
        font-size: 1.1rem; /* Adjust for smaller screens */
    }
}

@media (max-width: 480px) {
    header {
        padding: 0.5rem 0;
    }

    nav ul li {
        margin: 0.5rem 0;
    }

    .hero {
        height: 50vh;
        padding: 1rem;
    }

    .hero-content {
        font-size: 1.2rem;
    }

    section {
        padding: 2rem 1rem;
    }

    .btn {
        padding: 0.75rem 1.25rem;
    }

    form input, form textarea, form button {
        padding: 0.75rem;
    }

    /* Adjustments for about-image */
    .about-image img {
        transform: scale(1); /* Ensure image scales correctly */
    }

    .about-image .overlay {
        font-size: 1rem; /* Smallest text on very small screens */
    }

    /* Adjustments for about-text */
    .about-text p {
        font-size: 1rem; /* Smallest text on very small screens */
    }
}

/* Responsive adjustments for touch devices */
@media (pointer: coarse) {
    /* Add touch interaction styles if needed */
    .service-item, .info-card, .contact-content {
        /* Enable touch feedback by increasing the size of clickable areas */
        touch-action: manipulation;
    }

    .service-item:active, .info-card:active, .contact-content:active {
        /* Add a different visual state for touch interactions */
        transform: scale(0.98);
        background: var(--hover-bg);
    }
}
