# AI & ML Engineer Portfolio Website

A modern, responsive portfolio website designed for an AI & Machine Learning Engineer. This project showcases professional experience, technical skills, and projects using a dark-themed, glassmorphism UI design.

## 🚀 Features

- **Responsive Design:** Fully adaptable layout that works on mobile, tablet, and desktop devices.  
- **Glassmorphism UI:** Modern aesthetic using semi-transparent backgrounds and blur effects.  
- **Interactive Visuals:**
  - **Particle Background:** Dynamic background animation using p5.js.  
  - **Typing Effect:** Engaging text animation using Typed.js.  
  - **Skills Radar:** Interactive data visualization for technical skills using ECharts.  
  - **Smooth Animations:** Scroll and hover animations powered by Anime.js and GSAP.  
  - **Project Filtering:** Dynamic filtering system to categorize projects (AI/ML, NLP, Computer Vision, etc.).  
- **Working Contact Form:** Integrated with EmailJS for real-time email functionality without a backend server.  

## 🛠️ Tech Stack

- **Core:** HTML5, CSS3, JavaScript (ES6+)  
- **Styling:** Tailwind CSS (CDN)  
- **Animations & Visuals:**  
  - Anime.js - Interface animations  
  - Typed.js - Typewriter effects  
  - p5.js - Particle background generation  
  - ECharts - Skills radar chart  
  - GSAP - Transitions (specifically in contact.html)  
- **Services:**  
  - EmailJS - Form submission handling  

## 📂 File Structure
/
├── index.html # Main Landing Page (Dark Theme, Single Page Scroll)
├── about.html # Detailed About Me page (Timeline & Education)
├── projects.html # Detailed Projects Showcase (Grid & Modals)
├── contact.html # Standalone Contact Page (Light Theme variant)
├── main.js # Core logic for animations, charts, and routing
└── resources/ # Folder for images and static assets
├── image_bebd40.png
└── [other assets]


## 💻 How to Run

Since this is a static website, no build process or server installation is required.

1. Clone or download this repository.  
2. Open `index.html` directly in your web browser.  
3. Ensure you have an active internet connection as libraries (Tailwind, Anime.js, etc.) are loaded via CDN.  

## ⚙️ Configuration

### EmailJS Setup

To make the contact form fully functional, update the EmailJS credentials in `contact.html` and `main.js`:

1. Create an account at [EmailJS](https://www.emailjs.com/).  
2. Replace the public key `"QlmsTAEe_4xkOAKjV"` with your own.  
3. Update the Service ID `"service_t3qx0qd"` and Template ID `"template_vuzl5cm"` with your specific IDs.  

## 🎨 Design Notes

- **Main Theme:** The core site (`index.html`, `about.html`, `projects.html`) utilizes a dark gradient background (`#0f0f0f` to `#1a1a1a`) with blue/cyan accents.  
- **Contact Page:** The `contact.html` file currently uses a distinct Light Theme (`bg-white`) and relies on GSAP for animations, differing slightly from the main Anime.js implementation.  


Made with ❤️ and ☕ by Ahmed Fadlallah

