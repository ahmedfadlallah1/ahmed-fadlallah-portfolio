// Portfolio Website Main JavaScript
// Ahmed Fadlallah - AI & ML Engineer Portfolio

// Project Data
const projects = [
    {
        title: "Neural Network Optimizer",
        description: "Advanced neural network optimization framework using genetic algorithms and gradient descent variations.",
        icon: "🧠",
        gradient: "from-blue-500 to-purple-600",
        tags: ["Python", "TensorFlow", "NumPy"],
        category: "ai-ml",
        link: "#",
        github: "#"
    },
    {
        title: "Real-time Object Detection",
        description: "YOLO-based object detection system with real-time processing capabilities for surveillance applications.",
        icon: "👁️",
        gradient: "from-green-500 to-teal-600",
        tags: ["Python", "OpenCV", "YOLO"],
        category: "computer-vision",
        link: "#",
        github: "#"
    },
    {
        title: "Sentiment Analysis Engine",
        description: "Advanced NLP model for sentiment analysis with multi-language support and real-time processing.",
        icon: "💬",
        gradient: "from-orange-500 to-red-600",
        tags: ["Python", "Transformers", "BERT"],
        category: "nlp",
        link: "#",
        github: "#"
    },
    {
        title: "Predictive Analytics Platform",
        description: "Comprehensive data science platform for predictive analytics with automated feature engineering.",
        icon: "📊",
        gradient: "from-indigo-500 to-pink-600",
        tags: ["Python", "Pandas", "Scikit-learn"],
        category: "data-science",
        link: "#",
        github: "#"
    },
    {
        title: "Reinforcement Learning Agent",
        description: "Autonomous agent trained using deep reinforcement learning for complex decision-making scenarios.",
        icon: "🤖",
        gradient: "from-yellow-500 to-orange-600",
        tags: ["Python", "PyTorch", "RLlib"],
        category: "ai-ml",
        link: "#",
        github: "#"
    },
    {
        title: "Image Classification System",
        description: "Deep learning-based image classification with convolutional neural networks and transfer learning.",
        icon: "📸",
        gradient: "from-cyan-500 to-blue-600",
        tags: ["Python", "Keras", "CNN"],
        category: "computer-vision",
        link: "#",
        github: "#"
    }
];

// Initialize all components when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    initTypewriter();
    initSkillsRadar();
    renderProjects(projects);
    initProjectFilter();
    initScrollAnimations();
    initParticleBackground();
    initContactForm(); // Updated
});

// Render Projects Function
function renderProjects(projectsData) {
    const projectsContainer = document.querySelector('.grid.md\\:grid-cols-2.lg\\:grid-cols-3.gap-8');
    if (!projectsContainer) return;

    projectsContainer.innerHTML = projectsData.map(project => `
        <div class="project-card glass-card p-6 hover-card ${project.category} animate-on-scroll">
            <div class="h-48 bg-gradient-to-br ${project.gradient} rounded-lg mb-4 flex items-center justify-center">
                <span class="text-6xl">${project.icon}</span>
            </div>
            <h3 class="text-xl font-bold mb-3">${project.title}</h3>
            <p class="text-gray-300 mb-4">
                ${project.description}
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
                ${project.tags.map(tag => {
        let color = 'blue';
        if (tag === 'OpenCV' || tag === 'Scikit-learn' || tag === 'Keras') color = 'red';
        if (tag === 'YOLO' || tag === 'CNN') color = 'yellow';
        if (tag === 'TensorFlow' || tag === 'Transformers' || tag === 'PyTorch') color = 'purple';
        if (tag === 'NumPy' || tag === 'BERT' || tag === 'RLlib') color = 'green';
        if (tag === 'Pandas') color = 'orange';
        return `<span class="bg-${color}-500 text-white px-3 py-1 rounded-full text-sm">${tag}</span>`;
    }).join('')}
            </div>
            <div class="flex justify-between items-center">
                <a href="${project.link}" class="text-blue-400 hover:text-blue-300">View Project</a>
                <a href="${project.github}" class="text-gray-400 hover:text-white">GitHub</a>
            </div>
        </div>
    `).join('');
}

// Typewriter effect
function initTypewriter() {
    if (typeof Typed !== 'undefined') {
        new Typed('#typed-name', {
            strings: ['Ahmed Fadlallah', 'AI & ML Engineer', 'Innovation Driver'],
            typeSpeed: 80,
            backSpeed: 50,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });

        new Typed('#typed-title', {
            strings: ['Transforming Ideas into Intelligent Solutions', 'Building the Future with AI', 'Machine Learning Excellence'],
            typeSpeed: 60,
            backSpeed: 30,
            backDelay: 3000,
            loop: true,
            showCursor: false
        });
    }
}

// Radar chart
function initSkillsRadar() {
    if (typeof echarts !== 'undefined' && document.getElementById('skills-radar')) {
        const skillsChart = echarts.init(document.getElementById('skills-radar'));

        const option = {
            backgroundColor: 'transparent',
            radar: {
                indicator: [
                    { name: 'Python', max: 100 },
                    { name: 'Machine Learning', max: 100 },
                    { name: 'Deep Learning', max: 100 },
                    { name: 'Computer Vision', max: 100 },
                    { name: 'NLP', max: 100 },
                    { name: 'TensorFlow', max: 100 },
                    { name: 'PyTorch', max: 100 },
                    { name: 'Data Science', max: 100 }
                ],
                radius: '70%'
            },
            series: [{
                type: 'radar',
                data: [{
                    value: [95, 90, 85, 80, 75, 88, 82, 92],
                    name: 'Technical Skills'
                }]
            }]
        };

        skillsChart.setOption(option);

        window.addEventListener('resize', () => skillsChart.resize());
    }
}

// Project filtering
function initProjectFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const filter = this.getAttribute('data-filter');

            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            projectCards.forEach(card => {
                if (filter === 'all' || card.classList.contains(filter)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Scroll animations
function initScrollAnimations() {
    if (typeof anime !== 'undefined') {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    anime({
                        targets: entry.target,
                        opacity: [0, 1],
                        translateY: [30, 0],
                        duration: 800,
                        easing: 'easeOutQuad'
                    });

                    observer.unobserve(entry.target);
                }
            });
        });

        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            el.style.opacity = '0';
            observer.observe(el);
        });
    }
}

// Particle background
function initParticleBackground() {
    if (typeof p5 !== 'undefined' && document.getElementById('particle-bg')) {
        new p5(function (p) {
            let particles = [];
            let numParticles = 50;

            p.setup = function () {
                const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
                canvas.parent('particle-bg');
                canvas.style('position', 'fixed');
                canvas.style('top', '0');
                canvas.style('left', '0');
                canvas.style('z-index', '-1');

                for (let i = 0; i < numParticles; i++) {
                    particles.push({
                        x: p.random(p.width),
                        y: p.random(p.height),
                        vx: p.random(-0.5, 0.5),
                        vy: p.random(-0.5, 0.5),
                        size: p.random(2, 6),
                        opacity: p.random(0.3, 0.8)
                    });
                }
            };

            p.draw = function () {
                p.clear();

                particles.forEach(particle => {
                    particle.x += particle.vx;
                    particle.y += particle.vy;
                    if (particle.x < 0) particle.x = p.width;
                    if (particle.x > p.width) particle.x = 0;
                    if (particle.y < 0) particle.y = p.height;
                    if (particle.y > p.height) particle.y = 0;

                    p.fill(0, 212, 255, particle.opacity * 255);
                    p.noStroke();
                    p.circle(particle.x, particle.y, particle.size);
                });

                particles.forEach((particle, i) => {
                    particles.slice(i + 1).forEach(other => {
                        const distance = p.dist(particle.x, particle.y, other.x, other.y);
                        if (distance < 100) {
                            const alpha = p.map(distance, 0, 100, 0.3, 0);
                            p.stroke(0, 212, 255, alpha * 255);
                            p.line(particle.x, particle.y, other.x, other.y);
                        }
                    });
                });
            };

            p.windowResized = function () {
                p.resizeCanvas(p.windowWidth, p.windowHeight);
            };
        });
    }
}

// Contact Form (UPDATED + EmailJS Works)
function initContactForm() {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {

        emailjs.init("QlmsTAEe_4xkOAKjV");

        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;

            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            emailjs.sendForm("service_t3qx0qd", "template_vuzl5cm", this)
                .then(() => {
                    showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
                    this.reset();
                })
                .catch((error) => {
                    console.error("EmailJS Error:", error);
                    showNotification('Failed to send message. Please try again later.', 'error');
                })
                .finally(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                });
        });
    }
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;

    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '15px 20px',
        borderRadius: '8px',
        color: '#ffffff',
        fontWeight: 'bold',
        zIndex: '10000',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease'
    });

    const colors = {
        success: '#10b981',
        error: '#ef4444',
        warning: '#f59e0b',
        info: '#00d4ff'
    };

    notification.style.backgroundColor = colors[type] || colors.info;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Smooth scroll for anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile menu
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const isOpen = mobileMenu.classList.contains('open');

    if (isOpen) {
        mobileMenu.classList.remove('open');
        mobileMenu.style.display = 'none';
    } else {
        mobileMenu.style.display = 'block';
        mobileMenu.classList.add('open');
    }
}

// Card hover effects
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.hover-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            if (typeof anime !== 'undefined') {
                anime({
                    targets: this,
                    scale: 1.05,
                    rotateY: 5,
                    duration: 300,
                    easing: 'easeOutQuad'
                });
            }
        });

        card.addEventListener('mouseleave', function () {
            if (typeof anime !== 'undefined') {
                anime({
                    targets: this,
                    scale: 1,
                    rotateY: 0,
                    duration: 300,
                    easing: 'easeOutQuad'
                });
            }
        });
    });
});
