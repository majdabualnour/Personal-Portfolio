// Create floating stars background
function createStars() {
    const stars = document.getElementById('stars');
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.style.position = 'absolute';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.width = Math.random() * 3 + 'px';
        star.style.height = star.style.width;
        star.style.backgroundColor = 'white';
        star.style.borderRadius = '50%';
        star.style.opacity = Math.random();
        star.style.animation = `float ${3 + Math.random() * 5}s infinite`;
        stars.appendChild(star);
    }
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

document.querySelectorAll('.section').forEach((section) => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.6s ease-out';
    observer.observe(section);
});

// Initialize stars
createStars();


// Add testimonial slider functionality
let testimonialIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');

function cycleTestimonials() {
    testimonials.forEach(testimonial => {
        testimonial.style.transform = `translateX(-${testimonialIndex * 100}%)`;
    });
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
}

setInterval(cycleTestimonials, 8000);

// Add timeline animation
const timelineEvents = document.querySelectorAll('.timeline-event');
timelineEvents.forEach((event, index) => {
    event.style.transitionDelay = `${index * 100}ms`;
    observer.observe(event);
});

// Add this to script.js
async function fetchGitHubProjects() {
    try {
        const response = await fetch('https://api.github.com/users/majdabualnour/repos?sort=updated&direction=desc');
        const projects = await response.json();
        
        const projectsContainer = document.getElementById('github-projects');
        
        projects.forEach(async project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            
            const languages = await fetchProjectLanguages(project.languages_url);
            
            projectCard.innerHTML = `
                <h3>${project.name}</h3>
                <p>${project.description || 'No description available'}</p>
                <div class="project-languages">
                    ${languages.map(lang => `<span class="language-tag">${lang}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.html_url}" class="project-link" target="_blank">
                        <i class="fab fa-github"></i> View Code
                    </a>
                    ${project.homepage ? `
                    <a href="${project.homepage}" class="project-link" target="_blank">
                        <i class="fas fa-external-link-alt"></i> Live Demo
                    </a>` : ''}
                </div>
            `;
            
            projectsContainer.appendChild(projectCard);
        });
    } catch (error) {
        console.error('Error fetching GitHub projects:', error);
        projectsContainer.innerHTML = '<p>Error loading projects. Please check back later.</p>';
    }
}

async function fetchProjectLanguages(url) {
    try {
        const response = await fetch(url);
        const languages = await response.json();
        return Object.keys(languages).slice(0, 3); // Show top 3 languages
    } catch (error) {
        return [];
    }
}

// Call the function when the page loads
window.addEventListener('load', fetchGitHubProjects);
// Add particles.js effect
document.addEventListener('DOMContentLoaded', function() {
    particlesJS.load('particles-js', 'particles.json', function() {
        console.log('Particles.js loaded');
    });
});


  const mobileMenu = document.getElementById('mobile-menu');
  const navMenu = document.querySelector('.nav-menu');

  mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });



