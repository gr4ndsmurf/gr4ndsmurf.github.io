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
        tags: ['Unity', 'C#', 'Pathfinding', 'AI', 'Programming', 'Demo']
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
        tags: ['Unity', 'C#', 'Game']
    },
    'sword-of-pawrok': {
        title: 'Sword of Pawrok',
        image: 'img/portfolio/sop_logo_mini.png',
        description: 'RPG demo made with Unity',
        githubLink: 'https://github.com/gr4ndsmurf/project-rpg',
        youtubeLink: 'https://www.youtube.com/watch?v=zVvVfg3hedA',
        tags: ['Unity', 'C#', 'Demo']
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
        tags: ['Unity', 'C#', 'Architecture', 'Programming', 'AI', 'Game']
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
        tags: ['Unity', 'C#', 'Demo']
    },
    'Stack-Clone': {
        title: 'Stack-Clone',
        image: 'img/portfolio/Stack_banner.gif',
        description: 'A simple clone of the popular mobile game "Stack", recreated for learning and practice purposes.',
        githubLink: 'https://github.com/gr4ndsmurf/Stack-Clone',
        youtubeLink: '',
        tags: ['Unity', 'C#', 'Demo']
    },
    'MatchBlock3D-Clone': {
        title: 'MatchBlock3D-Clone',
        image: 'img/portfolio/MatchBlock3D.jpeg',
        description: 'A simple clone of the popular mobile game "Match Block 3D", recreated for learning and practice purposes.',
        githubLink: 'https://github.com/gr4ndsmurf/MatchBlock3D-Clone',
        youtubeLink: '',
        tags: ['Unity', 'C#', 'Demo']
    },
    'HyperCasual-CharacterController': {
        title: 'HyperCasual-CharacterController',
        image: 'img/portfolio/HyperCasual-CharacterController.png',
        description: 'A modular Character Controller built specifically for Hyper Casual games in Unity.',
        githubLink: 'https://github.com/gr4ndsmurf/HyperCasual-CharacterController',
        youtubeLink: '',
        tags: ['Unity', 'C#', 'Demo']
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
            
            // Display project tags in modal
            const modalTagsContainer = document.querySelector('.modal-tags');
            modalTagsContainer.innerHTML = '';
            
            if (project.tags && Array.isArray(project.tags)) {
                project.tags.forEach(tag => {
                    const tagElement = document.createElement('span');
                    tagElement.classList.add('project-tag', 'modal-tag');
                    tagElement.textContent = tag;
                    modalTagsContainer.appendChild(tagElement);
                });
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

// Add the modal tags container to the observer for animations
const modalTagsContainer = document.querySelector('.modal-tags-container');
if (modalTagsContainer) {
    modalTagsContainer.style.opacity = '0';
    modalTagsContainer.style.transform = 'translateY(10px)';
    modalTagsContainer.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    
    // Add animation when modal opens
    const modalObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.target.classList.contains('active')) {
                setTimeout(() => {
                    modalTagsContainer.style.opacity = '1';
                    modalTagsContainer.style.transform = 'translateY(0)';
                }, 300);
            } else {
                modalTagsContainer.style.opacity = '0';
                modalTagsContainer.style.transform = 'translateY(10px)';
            }
        });
    });
    
    modalObserver.observe(modalOverlay, { attributes: true, attributeFilter: ['class'] });
}

// Add the show class for the animation
document.documentElement.style.setProperty('--show-opacity', '1');
document.documentElement.style.setProperty('--show-transform', 'translateY(0)');

// Particle background effect - Simplified version
const createParticles = () => {
    const hero = document.querySelector('.hero');
    const particleCount = 30; // Reduced particle count for better performance
    
    // Create a single style element for all particles
    const styleElement = document.createElement('style');
    let keyframesCSS = '';
    
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
        particle.style.animation = `float${i} ${Math.random() * 10 + 5}s linear infinite`;
        particle.style.zIndex = '-1';
        
        // Add keyframes to the collective CSS
        keyframesCSS += `
            @keyframes float${i} {
                0% { transform: translateY(0) translateX(0); }
                50% { transform: translateY(${Math.random() * 100 - 50}px) translateX(${Math.random() * 100 - 50}px); }
                100% { transform: translateY(0) translateX(0); }
            }
        `;
        
        hero.appendChild(particle);
    }
    
    // Add all keyframes at once
    styleElement.textContent = keyframesCSS;
    document.head.appendChild(styleElement);
};

// Initialize particles
window.addEventListener('load', createParticles);

// Portfolio search and tag functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('portfolio-search');
    const clearButton = document.getElementById('clear-search');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const tagsListContainer = document.getElementById('tags-list');
    
    // Etiket havuzundan etiketleri oluştur
    tagPool.sort().forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.classList.add('filter-tag');
        tagElement.textContent = tag;
        tagElement.setAttribute('data-tag', tag);
        tagsListContainer.appendChild(tagElement);
        
        // Add click event for filtering
        tagElement.addEventListener('click', function() {
            this.classList.toggle('active');
            filterProjects();
        });
    });
    
    // Add tags to each portfolio item
    portfolioItems.forEach(item => {
        const projectId = item.getAttribute('data-project');
        const project = projects[projectId];
        const tagsContainer = item.querySelector('.portfolio-tags');
        
        if (project && project.tags && tagsContainer) {
            project.tags.forEach(tag => {
                const tagElement = document.createElement('span');
                tagElement.classList.add('project-tag');
                tagElement.textContent = tag;
                tagsContainer.appendChild(tagElement);
            });
        }
    });
    
    // Birleşik filtreleme fonksiyonu
    function filterProjects() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const activeTags = Array.from(document.querySelectorAll('.filter-tag.active')).map(tag => 
            tag.getAttribute('data-tag')
        );
        
        portfolioItems.forEach(item => {
            const projectId = item.getAttribute('data-project');
            const project = projects[projectId];
            const title = item.querySelector('.portfolio-title').textContent.toLowerCase();
            const category = item.querySelector('.portfolio-category').textContent.toLowerCase();
            
            // Arama terimiyle eşleşme kontrolü
            const matchesSearch = searchTerm === '' || 
                title.includes(searchTerm) || 
                category.includes(searchTerm) || 
                projectId.includes(searchTerm) ||
                (project.tags && project.tags.some(tag => tag.toLowerCase().includes(searchTerm)));
            
            // Aktif etiketlerle eşleşme kontrolü
            const matchesTags = activeTags.length === 0 || 
                (project.tags && activeTags.every(tag => project.tags.includes(tag)));
            
            // Birleşik filtrelere göre göster/gizle
            if (matchesSearch && matchesTags) {
                item.style.display = '';
                // Görünen öğeler için hafif animasyon ekle
                item.style.opacity = '0';
                setTimeout(() => {
                    item.style.opacity = '1';
                }, 50);
            } else {
                item.style.display = 'none';
            }
        });
    }
    
    // Kullanıcı yazarken arama yap
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        
        // Girişe göre temizleme düğmesini göster/gizle
        if (searchTerm.length > 0) {
            clearButton.classList.add('visible');
        } else {
            clearButton.classList.remove('visible');
        }
        
        filterProjects();
    });
    
    // Arama ve etiket filtrelerini temizle
    clearButton.addEventListener('click', function() {
        searchInput.value = '';
        clearButton.classList.remove('visible');
        
        // Aktif etiketleri temizle
        document.querySelectorAll('.filter-tag.active').forEach(tag => {
            tag.classList.remove('active');
        });
        
        // Tüm portfolyo öğelerini göster
        portfolioItems.forEach(item => {
            item.style.display = '';
            // Yumuşak görünüm animasyonu
            item.style.opacity = '0';
            setTimeout(() => {
                item.style.opacity = '1';
            }, 50);
        });
        
        // Arama girdisine odaklan
        searchInput.focus();
    });

    
    // Etiket tıklama işlevselliği - Optimize edilmiş
    // Delegasyon kullanarak tüm etiketler için tek bir olay dinleyici
    document.addEventListener('click', function(e) {
        // Proje etiketi tıklandığında
        if (e.target.classList.contains('project-tag')) {
            e.stopPropagation(); // Modal açılmasını engelle
            
            const tagText = e.target.textContent;
            const filterTag = document.querySelector(`.filter-tag[data-tag="${tagText}"]`);
            
            if (filterTag) {
                // Diğer aktif etiketleri temizle
                document.querySelectorAll('.filter-tag.active').forEach(t => {
                    t.classList.remove('active');
                });
                
                // Bu etiketi aktifleştir
                filterTag.classList.add('active');
                
                // Eğer modaldaysak, modalı kapat
                if (modalOverlay.classList.contains('active')) {
                    closeModal();
                }
                
                // Portfolio bölümüne kaydır
                document.querySelector('#portfolio').scrollIntoView({ behavior: 'smooth' });
                
                // Filtrelemeyi uygula
                filterProjects();
            }
        }
    });

});