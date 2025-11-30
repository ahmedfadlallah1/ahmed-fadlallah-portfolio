# Ahmed Fadlallah - Portfolio Website

A modern, responsive portfolio website showcasing AI & ML engineering projects and expertise.

## 🚀 Features

- **Dynamic Project Showcase** - Projects rendered from JavaScript array for easy updates
- **Contact Form** - Integrated with EmailJS for real message delivery
- **Google-Inspired Design** - Material Design 3 aesthetics with dark theme
- **Responsive Layout** - Works seamlessly on desktop, tablet, and mobile
- **Interactive Animations** - Smooth scroll animations and hover effects
- **Skills Visualization** - Radar chart powered by ECharts
- **Particle Background** - Dynamic p5.js particle system

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first styling
- **JavaScript (ES6+)** - Dynamic functionality
- **EmailJS** - Contact form integration
- **Anime.js** - Smooth animations
- **Typed.js** - Typewriter effects
- **ECharts** - Skills radar chart
- **p5.js** - Particle background effects

## 📁 Project Structure

```
Portfolio/
├── index.html          # Main single-page application
├── about.html          # Standalone about page
├── projects.html       # Standalone projects page
├── contact.html        # Standalone contact page
├── main.js             # Core JavaScript functionality
├── styles.css          # Custom styles
└── resources/          # Images and assets
```

## 🔧 Setup & Configuration

### EmailJS Configuration

1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Create an email service and template
3. Update the following in `main.js` and `contact.html`:

```javascript
emailjs.init("YOUR_PUBLIC_KEY");
emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this);
```

### Adding New Projects

Edit the `projects` array in `main.js`:

```javascript
{
    title: "Project Name",
    description: "Project description",
    icon: "🚀",
    gradient: "from-blue-500 to-purple-500",
    tags: ["Python", "TensorFlow", "AI"],
    category: "ai-ml",
    link: "https://project-link.com",
    github: "https://github.com/username/repo"
}
```

## 🎨 Design Features

- **Material Design 3** - Google-inspired color palette and components
- **Dark Theme** - Easy on the eyes with `#202124` background
- **Glass Morphism** - Frosted glass effect on cards
- **Gradient Accents** - Blue-to-cyan gradients throughout
- **Smooth Transitions** - 300ms duration for all interactions

## 📱 Contact Integration

- **Email**: Direct contact form with EmailJS
- **WhatsApp**: Click-to-chat functionality
- **LinkedIn**: Professional networking
- **GitHub**: Code repositories
- **Instagram**: Social presence

## 🚀 Deployment

This is a static website that can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

Simply upload all files to your hosting provider.

## 📄 License

© 2025 Ahmed Fadlallah. All rights reserved.

## 🤝 Contact

- **Email**: iadham.fadlallah@gmail.com
- **WhatsApp**: +201069156638
- **LinkedIn**: [adhamfadlallah2005](https://www.linkedin.com/in/adhamfadlallah2005)
- **GitHub**: [Fadallaah](https://github.com/Fadallaah)

---

Built with ❤️ and ☕ by Ahmed Fadlallah
