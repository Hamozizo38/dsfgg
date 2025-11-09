// Smooth scrolling for navigation links with enhanced effects
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        // Add ripple effect to the clicked link
        const ripple = document.createElement('span');
        ripple.classList.add('ripple-effect');
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
        
        // Enhanced scroll with additional effects
        window.scrollTo({
            top: targetSection.offsetTop - 100,
            behavior: 'smooth'
        });
        
        // Add special effect when reaching target section
        setTimeout(() => {
            targetSection.classList.add('highlight-section');
            setTimeout(() => {
                targetSection.classList.remove('highlight-section');
            }, 2000);
        }, 800);
    });
});

// Scroll effects
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Add sparkle effects when section becomes visible
            if (entry.target.id === 'students' || entry.target.id === 'teachers') {
                addSparkleEffects(entry.target);
            }
            
            // Add staggered animation for cards
            if (entry.target.id === 'students' || entry.target.id === 'teachers' || entry.target.id === 'leaders') {
                const cards = entry.target.querySelectorAll('.card, .teacher-card, .leader-card');
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('stagger-item', 'visible');
                    }, index * 100);
                });
            }
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Back to top button
const backToTopButton = document.getElementById('backToTop');
    
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Image modal functionality
const imageModal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalName = document.getElementById('modalName');
const modalInfo = document.getElementById('modalInfo');
const closeModal = document.getElementById('closeModal');

// Function to open modal for students
function openStudentModal(img, name, info) {
    modalImage.src = img.src;
    modalImage.alt = img.alt;
    modalName.textContent = name;
    modalInfo.textContent = info;
    
    imageModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Add entrance animation
    setTimeout(() => {
        imageModal.classList.add('loaded');
    }, 50);
}

// Add click event to student cards
document.querySelectorAll('.card').forEach(card => {
    const img = card.querySelector('img');
    const name = card.querySelector('h3').textContent;
    const info = card.getAttribute('data-info') || 'Proud member of the 8A family!';
    
    card.addEventListener('click', function() {
        openStudentModal(img, name, info);
    });
});

// Add click event to teacher cards
document.querySelectorAll('.teacher-card').forEach(card => {
    const img = card.querySelector('img');
    const name = card.getAttribute('data-teacher') || card.querySelector('h3').textContent;
    const info = card.getAttribute('data-info') || 'Amazing teacher at 8A!';
    
    card.addEventListener('click', function() {
        openStudentModal(img, name, info);
    });
});

// Close modal
closeModal.addEventListener('click', function() {
    imageModal.classList.remove('active', 'loaded');
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
imageModal.addEventListener('click', function(e) {
    if (e.target === imageModal) {
        imageModal.classList.remove('active', 'loaded');
        document.body.style.overflow = 'auto';
    }
});

// Content loading animation
setTimeout(() => {
    document.querySelectorAll('section').forEach((section, index) => {
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 100);
    });
}, 500);

// Floating elements animation
document.querySelectorAll('.floating-element').forEach((element, index) => {
    element.style.animationDelay = `${index * 2}s`;
});

// Add sparkle effects to elements
function addSparkleEffects(container) {
    // Remove existing sparkles
    const existingSparkles = container.querySelectorAll('.sparkle');
    existingSparkles.forEach(sparkle => sparkle.remove());
    
    // Add new sparkles
    for (let i = 0; i < 15; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = `${Math.random() * 100}%`;
        sparkle.style.top = `${Math.random() * 100}%`;
        sparkle.style.animationDelay = `${Math.random() * 3}s`;
        sparkle.style.width = `${Math.random() * 10 + 5}px`;
        sparkle.style.height = sparkle.style.width;
        container.appendChild(sparkle);
    }
}

// Add interactive effects to day cells
document.querySelectorAll('.day-cell').forEach(day => {
    day.addEventListener('mouseenter', function() {
        this.style.color = getRandomColor();
        this.style.transform = 'scale(1.1)';
    });
    
    day.addEventListener('mouseleave', function() {
        setTimeout(() => {
            this.style.color = '';
            this.style.transform = '';
        }, 1000);
    });
});

// Helper function for random colors
function getRandomColor() {
    const colors = ['#1e88e5', '#e91e63', '#ff9800', '#4caf50', '#9c27b0', '#00bcd4'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Add periodic animations to stats cards
setInterval(() => {
    document.querySelectorAll('.info-card').forEach(card => {
        card.style.transform = 'scale(1.05)';
        setTimeout(() => {
            card.style.transform = '';
        }, 300);
    });
}, 5000);

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    if (window.scrollY > 100) {
        header.classList.add('compact');
    } else {
        header.classList.remove('compact');
    }
});

// Parallax effect for floating elements
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-element');
    
    parallaxElements.forEach(function(element, index) {
        const speed = 0.5 + (index * 0.1);
        element.style.transform = `translateY(${scrolled * speed * 0.1}px) rotate(${scrolled * 0.05}deg)`;
    });
});

// Confetti effect when reaching thank you section
window.addEventListener('scroll', function() {
    const thankYouSection = document.querySelector('.thank-you-section');
    const sectionTop = thankYouSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (sectionTop < windowHeight * 0.8) {
        createConfetti();
    }
});

// Create confetti effect
function createConfetti() {
    // Only create confetti once
    if (document.querySelector('.confetti')) return;
    
    const colors = ['#1e88e5', '#e91e63', '#ff9800', '#4caf50', '#9c27b0', '#00bcd4'];
    const confettiCount = 100;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = Math.random() * 10 + 5 + 'px';
        confetti.style.opacity = '1';
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        
        document.body.appendChild(confetti);
        
        // Animate confetti
        const animation = confetti.animate([
            { transform: `translateY(0) rotate(0deg)`, opacity: 1 },
            { transform: `translateY(${window.innerHeight}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
        ], {
            duration: Math.random() * 3000 + 2000,
            easing: 'cubic-bezier(0.1, 0.8, 0.3, 1)'
        });
        
        animation.onfinish = () => confetti.remove();
    }
}

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .ripple-effect {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .highlight-section {
        animation: highlight 2s ease;
    }
    
    @keyframes highlight {
        0% { box-shadow: 0 0 0 0 rgba(30, 136, 229, 0.7); }
        50% { box-shadow: 0 0 0 20px rgba(30, 136, 229, 0); }
        100% { box-shadow: 0 0 0 0 rgba(30, 136, 229, 0); }
    }
    
    .image-modal.loaded .modal-content {
        animation: modalPop 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    
    @keyframes modalPop {
        0% { transform: scale(0.7) rotate(-5deg); }
        50% { transform: scale(1.05) rotate(2deg); }
        100% { transform: scale(1) rotate(0deg); }
    }
`;
document.head.appendChild(style);

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', function() {
    // Add entrance animations to elements
    const elements = document.querySelectorAll('.fade-in-up');
    elements.forEach(function(element, index) {
        element.style.animationDelay = `${index * 0.2}s`;
    });
    
    // Add staggered animation to cards
    const cards = document.querySelectorAll('.card, .teacher-card');
    cards.forEach(function(card, index) {
        card.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Add initial sparkle effects
    setTimeout(() => {
        addSparkleEffects(document.getElementById('students'));
        addSparkleEffects(document.getElementById('teachers'));
    }, 1000);
});