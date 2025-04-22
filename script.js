// Title scrolling effect for browser tab
let titleText = "gr4ndsmurf - Unity Game Developer - ";
let titleIndex = 0;

function scrollTitle() {
    document.title = titleText.substring(titleIndex) + titleText.substring(0, titleIndex);
    titleIndex = (titleIndex + 1) % titleText.length;
    setTimeout(scrollTitle, 150);
}

// Start title scrolling when page loads
window.addEventListener('load', scrollTitle);

// Project data
const projects = {
    'project-cyberops': {
        title: 'Project-CyberOps',
        image: 'img/portfolio/project-cyberops_banner.jpeg',
        description: 'Immerse yourself in a thrilling 2D action-parkour game set in a dark and technological cyberpunk universe. Test your skills to the limit as you eliminate enemies, solve challenging puzzles to unlock doors and chests, and collect coins throughout each level.',
        githubLink: 'https://github.com/gr4ndsmurf/Project-CyberOps',
        youtubeLink: 'https://www.youtube.com/watch?v=pXhB3EYcGZA'
    },
    'solid-principles': {
        title: 'Solid Principles',
        image: 'img/portfolio/solid-banner.jpeg',
        description: 'A demo showcase game that simply presents the S.O.L.I.D principles in Unity 3D using C#.',
        githubLink: 'https://github.com/gr4ndsmurf/SOLID-Principles',
        youtubeLink: 'https://www.youtube.com/watch?v=gi0EkKUH2n0'
    },
    'kitchen-chaos': {
        title: 'Kitchen Chaos',
        image: 'img/portfolio/KitchenChaosLogo.png',
        description: 'Code Monkeys Kitchen Chaos game tutorial, a 10 hour course making a complete game from scratch! The game features lots of interesting systems which makes for a great learning project.',
        githubLink: 'https://github.com/gr4ndsmurf/KitchenChaos-Clone',
        youtubeLink: 'https://www.youtube.com/watch?v=AmGSEH7QcDg'
    },
    'sword-of-pawrok': {
        title: 'Sword of Pawrok',
        image: 'img/portfolio/sop_logo_mini.png',
        description: 'RPG demo made with Unity',
        githubLink: 'https://github.com/gr4ndsmurf/project-rpg',
        youtubeLink: 'https://www.youtube.com/watch?v=zVvVfg3hedA'
    },
    '3d-procedural-animation': {
        title: '3D Procedural Animation',
        image: 'img/portfolio/Procedural-Animation-Banner.jpg',
        description: '3D Procedural Animation system focuses on achieving natural, responsive, and contextually-driven animations for characters. We aim to create animations that adapt to the environment and player actions in real-time, enhancing the overall immersion and gameplay experience.',
        githubLink: 'https://github.com/gr4ndsmurf/3D-Procedural-Animation',
        youtubeLink: ''
    },
    'unity-design-patterns': {
        title: 'Unity Design Patterns',
        image: 'img/portfolio/designpatterns.png',
        description: 'This repository demonstrates the implementation of various design patterns in Unity using C#. Each design pattern is showcased through a separate example within this project.',
        githubLink: 'https://github.com/gr4ndsmurf/Design-Patterns-Unity',
        youtubeLink: ''
    },
    'Astar-Pathfinding': {
        title: 'EnemyAI-StatePattern',
        image: 'img/portfolio/enemyai.png',
        description: 'Enemy AI (with A* pathfinding) made in Unity using State Pattern.',
        githubLink: 'https://github.com/gr4ndsmurf/EnemyAI-StatePattern',
        youtubeLink: ''
    },
    'OOP-SpaceShooter': {
        title: 'OOP-SpaceShooter',
        image: 'img/portfolio/spaceshooter_banner.png',
        description: 'This project was inspired by the classic space shooter games and developed as a demonstration of object-oriented programming techniques in Unity.',
        githubLink: 'https://github.com/gr4ndsmurf/OOP-SpaceShooter',
        youtubeLink: ''
    },
    'SO-CardSystem': {
        title: 'SO-CardSystem',
        image: 'img/portfolio/cardsystem_banner.png',
        description: 'This project demonstrates a basic card system in Unity, allowing you to create and manage cards using ScriptableObjects.',
        githubLink: 'https://github.com/gr4ndsmurf/SO-CardSystem',
        youtubeLink: ''
    },
    'Minigolf-Game': {
        title: 'Minigolf-Game',
        image: 'img/portfolio/minigolf_banner.png',
        description: 'Minigolf Game made in Unity',
        githubLink: 'https://github.com/gr4ndsmurf/minigolf-game',
        youtubeLink: ''
    }
};

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
    
    // Get all sections
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Find which section is in view
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });
    
    // Set active class for current section
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // Skip modal project links
    if (anchor.classList.contains('modal-project-link')) return;
    
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // For contact section, ensure we scroll all the way
            const offset = targetId === '#contact' ? 50 : 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Modal functionality
const modalOverlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal-close');
const modalTitle = document.querySelector('.modal-title');
const modalImg = document.querySelector('.modal-img');
const modalDescription = document.querySelector('.modal-description');
const githubLink = document.querySelector('.github-link');
const youtubeLink = document.querySelector('.youtube-link');

// Open modal when clicking on portfolio item
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('click', () => {
        const projectId = item.getAttribute('data-project');
        const project = projects[projectId];
        
        if (project) {
            modalTitle.textContent = project.title;
            modalImg.src = project.image;
            modalImg.alt = project.title;
            modalDescription.textContent = project.description;
            
            // Set GitHub link and visibility
            if (project.githubLink && project.githubLink.trim() !== '') {
                githubLink.href = project.githubLink;
                githubLink.style.display = 'flex';
            } else {
                githubLink.style.display = 'none';
            }
            
            // Set YouTube link and visibility
            if (project.youtubeLink && project.youtubeLink.trim() !== '') {
                youtubeLink.href = project.youtubeLink;
                youtubeLink.style.display = 'flex';
            } else {
                youtubeLink.style.display = 'none';
            }
            
            modalOverlay.classList.add('active');
            document.body.classList.add('modal-open');
            
            // Animation
            setTimeout(() => {
                modal.style.transform = 'translateY(0)';
                modal.style.opacity = '1';
            }, 100);
        }
    });
});

// Close modal
modalClose.addEventListener('click', () => {
    closeModal();
});

// Close modal when clicking outside
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        closeModal();
    }
});

// Prevent modal links from closing the modal
document.querySelectorAll('.modal-project-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.stopPropagation();
        
        // Make sure the link actually navigates
        const href = link.getAttribute('href');
        if (href && href !== '#') {
            // Open in new tab
            window.open(href, '_blank');
        }
    });
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
    }
});

function closeModal() {
    modal.style.transform = 'translateY(50px)';
    modal.style.opacity = '0';
    
    setTimeout(() => {
        modalOverlay.classList.remove('active');
        document.body.classList.remove('modal-open');
    }, 300);
}

// Reveal animations on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.1 });

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    if (section.classList.contains('hero')) return;
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(section);
});

// Add the show class for the animation
document.documentElement.style.setProperty('--show-opacity', '1');
document.documentElement.style.setProperty('--show-transform', 'translateY(0)');

// Particle background effect
const createParticles = () => {
    const hero = document.querySelector('.hero');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = `${Math.random() * 5 + 1}px`;
        particle.style.height = particle.style.width;
        particle.style.background = 'rgba(255, 255, 255, 0.5)';
        particle.style.borderRadius = '50%';
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.opacity = `${Math.random() * 0.5}`;
        particle.style.animation = `float ${Math.random() * 10 + 5}s linear infinite`;
        particle.style.zIndex = '-1';
        
        // Create keyframes for floating animation
        const keyframes = `
            @keyframes float {
                0% {
                    transform: translateY(0) translateX(0);
                }
                50% {
                    transform: translateY(${Math.random() * 100 - 50}px) translateX(${Math.random() * 100 - 50}px);
                }
                100% {
                    transform: translateY(0) translateX(0);
                }
            }
        `;
        
        // Add keyframes to document
        if (!document.querySelector(`style[data-particle="${i}"]`)) {
            const style = document.createElement('style');
            style.setAttribute('data-particle', i);
            style.textContent = keyframes;
            document.head.appendChild(style);
        }
        
        hero.appendChild(particle);
    }
};

// Initialize particles
window.addEventListener('load', createParticles);

// Portfolio search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('portfolio-search');
    const clearButton = document.getElementById('clear-search');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    // Search as user types
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        
        // Show/hide clear button based on input
        if (searchTerm.length > 0) {
            clearButton.classList.add('visible');
        } else {
            clearButton.classList.remove('visible');
        }
        
        // Filter portfolio items
        portfolioItems.forEach(item => {
            const title = item.querySelector('.portfolio-title').textContent.toLowerCase();
            const category = item.querySelector('.portfolio-category').textContent.toLowerCase();
            const projectId = item.getAttribute('data-project').toLowerCase();
            
            // Check if the item matches the search
            if (title.includes(searchTerm) || 
                category.includes(searchTerm) || 
                projectId.includes(searchTerm)) {
                item.style.display = '';
                // Add subtle animation for appearing items
                item.style.opacity = '0';
                setTimeout(() => {
                    item.style.opacity = '1';
                }, 50);
            } else {
                item.style.display = 'none';
            }
        });
    });
    
    // Clear search
    clearButton.addEventListener('click', function() {
        searchInput.value = '';
        clearButton.classList.remove('visible');
        
        // Show all portfolio items
        portfolioItems.forEach(item => {
            item.style.display = '';
            // Smooth appearance animation
            item.style.opacity = '0';
            setTimeout(() => {
                item.style.opacity = '1';
            }, 50);
        });
        
        // Focus back on the search input
        searchInput.focus();
    });
}); 