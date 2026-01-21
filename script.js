// Title scrolling effect for browser tab
let titleText = "gr4ndsmurf - Unity Game Developer - ";
let titleIndex = 0;

function scrollTitle() {
    document.title = titleText.substring(titleIndex) + titleText.substring(0, titleIndex);
    titleIndex = (titleIndex + 1) % titleText.length;
    setTimeout(scrollTitle, 150);
}

window.addEventListener('load', scrollTitle);

// Merkezi etiket havuzu
const tagPool = [
    'Unity',
    'C#',
    'Pathfinding',
    'AI',
    'Programming',
    'Architecture',
    'Game',
    'Demo',
    'PC',
    'Mobile',
    'Animation'
];

// Project data
const projects = {
    'project-cyberops': {
        title: 'Project-CyberOps',
        image: 'img/portfolio/project-cyberops_banner.jpeg',
        description: 'Immerse yourself in a thrilling 2D action-parkour game set in a dark and technological cyberpunk universe. Test your skills to the limit as you eliminate enemies, solve challenging puzzles to unlock doors and chests, and collect coins throughout each level.',
        githubLink: 'https://github.com/gr4ndsmurf/Project-CyberOps',
        youtubeLink: 'https://www.youtube.com/watch?v=pXhB3EYcGZA',
        tags: ['Unity', 'C#', 'Pathfinding', 'AI', 'Programming', 'Demo', 'PC']
    },
    'solid-principles': {
        title: 'Solid Principles',
        image: 'img/portfolio/solid-banner.jpeg',
        description: 'A demo showcase game that simply presents the S.O.L.I.D principles in Unity 3D using C#.',
        githubLink: 'https://github.com/gr4ndsmurf/SOLID-Principles',
        youtubeLink: 'https://www.youtube.com/watch?v=gi0EkKUH2n0',
        tags: ['Unity', 'C#', 'Architecture', 'Programming']
    },
    'kitchen-chaos': {
        title: 'Kitchen Chaos',
        image: 'img/portfolio/KitchenChaosLogo.png',
        description: 'Code Monkeys Kitchen Chaos game tutorial, a 10 hour course making a complete game from scratch! The game features lots of interesting systems which makes for a great learning project.',
        githubLink: 'https://github.com/gr4ndsmurf/KitchenChaos-Clone',
        youtubeLink: 'https://www.youtube.com/watch?v=AmGSEH7QcDg',
        tags: ['Unity', 'C#', 'Game', 'PC']
    },
    'sword-of-pawrok': {
        title: 'Sword of Pawrok',
        image: 'img/portfolio/sop_logo_mini.png',
        description: 'RPG demo made with Unity',
        githubLink: 'https://github.com/gr4ndsmurf/project-rpg',
        youtubeLink: 'https://www.youtube.com/watch?v=zVvVfg3hedA',
        tags: ['Unity', 'C#', 'Demo', 'PC']
    },
    '3d-procedural-animation': {
        title: '3D Procedural Animation',
        image: 'img/portfolio/Procedural-Animation-Banner.jpg',
        description: '3D Procedural Animation system focuses on achieving natural, responsive, and contextually-driven animations for characters. We aim to create animations that adapt to the environment and player actions in real-time, enhancing the overall immersion and gameplay experience.',
        githubLink: 'https://github.com/gr4ndsmurf/3D-Procedural-Animation',
        youtubeLink: '',
        tags: ['Unity', 'C#', 'Animation', 'Programming']
    },
    'unity-design-patterns': {
        title: 'Unity Design Patterns',
        image: 'img/portfolio/designpatterns.png',
        description: 'This repository demonstrates the implementation of various design patterns in Unity using C#. Each design pattern is showcased through a separate example within this project.',
        githubLink: 'https://github.com/gr4ndsmurf/Design-Patterns-Unity',
        youtubeLink: '',
        tags: ['Unity', 'C#', 'Architecture', 'Programming']
    },
    'Astar-Pathfinding': {
        title: 'EnemyAI-StatePattern',
        image: 'img/portfolio/enemyai.png',
        description: 'Enemy AI (with A* pathfinding) made in Unity using State Pattern.',
        githubLink: 'https://github.com/gr4ndsmurf/EnemyAI-StatePattern',
        youtubeLink: '',
        tags: ['Unity', 'C#', 'Architecture', 'Programming', 'Pathfinding', 'AI']
    },
    'OOP-SpaceShooter': {
        title: 'OOP-SpaceShooter',
        image: 'img/portfolio/spaceshooter_banner.png',
        description: 'This project was inspired by the classic space shooter games and developed as a demonstration of object-oriented programming techniques in Unity.',
        githubLink: 'https://github.com/gr4ndsmurf/OOP-SpaceShooter',
        youtubeLink: '',
        tags: ['Unity', 'C#', 'Architecture', 'Programming', 'AI', 'Game', 'PC']
    },
    'SO-CardSystem': {
        title: 'SO-CardSystem',
        image: 'img/portfolio/cardsystem_banner.png',
        description: 'This project demonstrates a basic card system in Unity, allowing you to create and manage cards using ScriptableObjects.',
        githubLink: 'https://github.com/gr4ndsmurf/SO-CardSystem',
        youtubeLink: '',
        tags: ['Unity', 'C#', 'Architecture', 'Programming']
    },
    'Minigolf-Game': {
        title: 'Minigolf-Game',
        image: 'img/portfolio/minigolf_banner.png',
        description: 'Minigolf Game made in Unity',
        githubLink: 'https://github.com/gr4ndsmurf/minigolf-game',
        youtubeLink: '',
        tags: ['Unity', 'C#', 'Demo', 'PC', 'Mobile']
    },
    'Stack-Clone': {
        title: 'Stack-Clone',
        image: 'img/portfolio/Stack_banner.gif',
        description: 'A simple clone of the popular mobile game "Stack", recreated for learning and practice purposes.',
        githubLink: 'https://github.com/gr4ndsmurf/Stack-Clone',
        youtubeLink: '',
        tags: ['Unity', 'C#', 'Demo', 'Mobile']
    },
    'MatchBlock3D-Clone': {
        title: 'MatchBlock3D-Clone',
        image: 'img/portfolio/MatchBlock3D.jpeg',
        description: 'A simple clone of the popular mobile game "Match Block 3D", recreated for learning and practice purposes.',
        githubLink: 'https://github.com/gr4ndsmurf/MatchBlock3D-Clone',
        youtubeLink: '',
        tags: ['Unity', 'C#', 'Demo', 'Mobile']
    },
    'HyperCasual-CharacterController': {
        title: 'HyperCasual-CharacterController',
        image: 'img/portfolio/HyperCasual-CharacterController.png',
        description: 'A modular Character Controller built specifically for Hyper Casual games in Unity.',
        githubLink: 'https://github.com/gr4ndsmurf/HyperCasual-CharacterController',
        youtubeLink: '',
        tags: ['Unity', 'C#', 'Demo', 'Mobile']
    },
    'OfficeFever-Clone': {
        title: 'OfficeFever-Clone',
        image: 'img/portfolio/office-fever.png',
        description: 'A simple Unity clone of the popular mobile game Office Fever. Built for educational purposes to explore game mechanics and mobile optimization techniques.',
        githubLink: 'https://github.com/gr4ndsmurf/HyperCasual-CharacterController',
        youtubeLink: '',
        tags: ['Unity', 'C#', 'Demo', 'Mobile']
    }
};

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
    // Removed old highlight logic to keep it simple with the new windows layout
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if(hamburger) {
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if(navLinks) navLinks.classList.remove('active');
        if(hamburger) hamburger.classList.remove('active');
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

// Open modal when clicking on desktop icon
// Using delegation on .portfolio-grid to capture clicks on .desktop-icon-container
const portfolioGrid = document.querySelector('.portfolio-grid');
if(portfolioGrid) {
    portfolioGrid.addEventListener('click', (e) => {
        const item = e.target.closest('.desktop-icon-container');
        if (!item) return;

        const projectId = item.getAttribute('data-project');
        const project = projects[projectId];
        
        if (project) {
            modalTitle.textContent = project.title;
            modalImg.src = project.image;
            modalImg.alt = project.title;
            modalDescription.textContent = project.description;
            
            // Set GitHub link
            if (project.githubLink && project.githubLink.trim() !== '') {
                githubLink.href = project.githubLink;
                githubLink.style.display = 'flex';
            } else {
                githubLink.style.display = 'none';
            }
            
            // Set YouTube link
            if (project.youtubeLink && project.youtubeLink.trim() !== '') {
                youtubeLink.href = project.youtubeLink;
                youtubeLink.style.display = 'flex';
            } else {
                youtubeLink.style.display = 'none';
            }
            
            // Display project tags in modal
            const modalTagsContainer = document.querySelector('.modal-tags');
            modalTagsContainer.innerHTML = '';
            
            if (project.tags && Array.isArray(project.tags)) {
                project.tags.forEach(tag => {
                    const tagElement = document.createElement('span');
                    tagElement.classList.add('project-tag', 'modal-tag');
                    tagElement.style.border = '1px solid black';
                    tagElement.style.padding = '2px 4px';
                    tagElement.style.background = 'white';
                    tagElement.style.marginRight = '4px';
                    tagElement.textContent = tag;
                    modalTagsContainer.appendChild(tagElement);
                });
            }
            
            modalOverlay.classList.add('active');
            document.body.classList.add('modal-open');
        }
    });
}

// Close modal
if(modalClose) {
    modalClose.addEventListener('click', () => {
        closeModal();
    });
}

// Close modal when clicking outside
if(modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
}

function closeModal() {
    if(modalOverlay) modalOverlay.classList.remove('active');
    document.body.classList.remove('modal-open');
}

// Particle background effect (Adapted for new Hero)
const createParticles = () => {
    // Append to window body of hero
    const heroContent = document.querySelector('#hero .window-body'); 
    
    // Safety check
    if(!heroContent) return;

    const particleCount = 20; 
    const styleElement = document.createElement('style');
    let keyframesCSS = '';
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = `${Math.random() * 4 + 2}px`;
        particle.style.height = particle.style.width;
        particle.style.background = 'var(--synth-cyan)'; // Use synthwave color
        particle.style.boxShadow = '0 0 5px var(--synth-cyan)';
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.opacity = `${Math.random() * 0.7}`;
        particle.style.animation = `float${i} ${Math.random() * 10 + 5}s linear infinite`;
        particle.style.zIndex = '0'; // Behind content but visible
        particle.style.pointerEvents = 'none';

        keyframesCSS += `
            @keyframes float${i} {
                0% { transform: translate(0, 0); }
                50% { transform: translate(${Math.random() * 60 - 30}px, ${Math.random() * 60 - 30}px); }
                100% { transform: translate(0, 0); }
            }
        `;
        heroContent.appendChild(particle);
    }
    document.head.appendChild(styleElement);
    styleElement.textContent = keyframesCSS;
};

// Functionality for Search and Filter
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('portfolio-search');
    const clearButton = document.getElementById('clear-search');
    const items = document.querySelectorAll('.desktop-icon-container'); // CHANGED SELECTOR
    const tagsListContainer = document.getElementById('tags-list');
    
    createParticles();

    // Etiket havuzundan etiketleri oluştur
    tagPool.sort().forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.classList.add('filter-tag');
        tagElement.textContent = tag;
        tagElement.setAttribute('data-tag', tag);
        tagsListContainer.appendChild(tagElement);
        
        tagElement.addEventListener('click', function() {
            this.classList.toggle('active');
            filterProjects();
        });
    });
    
    // Add tags to hidden data for search
    items.forEach(item => {
        const projectId = item.getAttribute('data-project');
        const project = projects[projectId];
        const tagsContainer = item.querySelector('.portfolio-tags');
        
        if (project && project.tags && tagsContainer) {
            project.tags.forEach(tag => {
                const tagElement = document.createElement('span');
                tagElement.textContent = tag; 
                // We just place them here so textContent search works
                tagsContainer.appendChild(tagElement);
            });
        }
    });

    function filterProjects() {
        if(!searchInput) return;
        const searchTerm = searchInput.value.toLowerCase().trim();
        const activeTags = Array.from(document.querySelectorAll('.filter-tag.active')).map(tag => 
            tag.getAttribute('data-tag')
        );
        
        items.forEach(item => {
            const projectId = item.getAttribute('data-project');
            const project = projects[projectId];
            
            // Search match
            const matchesSearch = searchTerm === '' || 
                (project && (
                    project.title.toLowerCase().includes(searchTerm) || 
                    project.description.toLowerCase().includes(searchTerm) ||
                    (project.tags && project.tags.some(tag => tag.toLowerCase().includes(searchTerm)))
                ));
            
            // Tag match
            const matchesTags = activeTags.length === 0 || 
                (project && project.tags && activeTags.every(tag => project.tags.includes(tag)));
            
            if (matchesSearch && matchesTags) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    }
    
    if(searchInput) {
        searchInput.addEventListener('input', function() {
            filterProjects();
        });
    }
    
    if(clearButton) {
        clearButton.addEventListener('click', function() {
            if(searchInput) searchInput.value = '';
            document.querySelectorAll('.filter-tag.active').forEach(tag => {
                tag.classList.remove('active');
            });
            filterProjects();
        });
    }
});
