// Language Switcher System
let currentLang = 'fr'; // Default language

const translations = {
    fr: {
        // Hero Section
        greeting: "BONJOUR !",
        job: "Développeur Full Stack",
        intro: "Étudiant en Master 2 DLIS à l'Université de Rennes, actuellement en alternance chez Orange Business.",
        intro2: "Passionné par le développement Full Stack, je conçois des applications robustes avec Java/Spring Boot et Angular. J'aime créer des solutions innovantes qui allient performance technique et expérience utilisateur optimale.",
        contactBtn: "Contactez-moi",
        resumeBtn: "CV",
        
        // About Section
        aboutTitle: "</AboutMe>",
        aboutP1: "Bonjour ! Je m'appelle Coffi Désiré Gnanguy. Je suis développeur Full Stack passionné, actuellement en Master 2 DLIS à l'Université de Rennes et en alternance chez Orange Business.",
        aboutP2: "Cette année m'a appris que je suis capable d'excellence lorsque je suis constant et engagé. J'ai compris que la reconnaissance la plus forte vient quand je fais les choses avec sincérité, que ce soit dans mes études, mon travail ou mon service aux autres.",
        aboutP3: "Passionné par les enjeux de sécurité et les systèmes complexes, je conçois des applications robustes avec Java/Spring Boot, Angular, React et PostgreSQL. J'utilise également Docker, Kubernetes et des pipelines CI/CD pour garantir des déploiements fiables et performants.",
        
        // Skills Section
        skillsTitle: "</Skills>",
        
        // Projects Section
        projectsTitle: "</Projects>",
        
        // Footer
        footerQuote: "\"Constant, engagé, et toujours en quête d'excellence.\"",
        getInTouch: "GetinTouch();",
    },
    en: {
        // Hero Section
        greeting: "HELLO!",
        job: "Full Stack Developer",
        intro: "Master 2 DLIS student at the University of Rennes, currently on work-study at Orange Business.",
        intro2: "Passionate about Full Stack development, I design robust applications with Java/Spring Boot and Angular. I love creating innovative solutions that combine technical performance and optimal user experience.",
        contactBtn: "Contact Me",
        resumeBtn: "Resume",
        
        // About Section
        aboutTitle: "</AboutMe>",
        aboutP1: "Hello! My name is Coffi Désiré Gnanguy. I'm a passionate Full Stack developer, currently pursuing a Master 2 DLIS at the University of Rennes and on work-study at Orange Business.",
        aboutP2: "This year taught me that I'm capable of excellence when I'm consistent and committed. I understood that the strongest recognition comes when I do things with sincerity, whether in my studies, my work, or my service to others.",
        aboutP3: "Passionate about security issues and complex systems, I design robust applications with Java/Spring Boot, Angular, React, and PostgreSQL. I also use Docker, Kubernetes, and CI/CD pipelines to ensure reliable and performant deployments.",
        
        // Skills Section
        skillsTitle: "</Skills>",
        
        // Projects Section
        projectsTitle: "</Projects>",
        
        // Footer
        footerQuote: "\"Consistent, committed, and always striving for excellence.\"",
        getInTouch: "GetinTouch();",
    }
};

function toggleLanguage() {
    currentLang = currentLang === 'fr' ? 'en' : 'fr';
    updateContent();
    updateFlag();
}

function updateFlag() {
    const flagElement = document.getElementById('lang-flag');
    flagElement.textContent = currentLang === 'fr' ? '🇫🇷' : '🇬🇧';
}

function updateContent() {
    const lang = translations[currentLang];
    
    // Update greeting
    const greeting = document.getElementById('hello-friend');
    if (greeting) {
        greeting.innerHTML = lang.greeting.split('').map(char => 
            char === ' ' ? '&nbsp;' : `<p class="jello">${char}</p>`
        ).join('');
    }
    
    // Update job title
    const work = document.getElementById('work');
    if (work) {
        const words = lang.job.split(' ');
        work.innerHTML = words.map(word => 
            `<div>${word.split('').map(char => `<p class="jello">${char}</p>`).join('')}</div>`
        ).join('');
    }
    
    // Update intro paragraph
    const infoPara = document.getElementById('info-para');
    if (infoPara) {
        infoPara.innerHTML = lang.intro + '<br /><br />' + lang.intro2;
    }
    
    // Update contact button
    const contactBtn = document.querySelector('.letsTalkBtn-text');
    if (contactBtn) {
        contactBtn.textContent = lang.contactBtn;
    }
    
    // Update resume button text
    const resumeText = document.querySelector('.resume-btn .text');
    if (resumeText) {
        resumeText.textContent = lang.resumeBtn;
    }
    
    // Update About section
    const aboutParagraphs = document.querySelectorAll('.about-info p');
    if (aboutParagraphs.length >= 3) {
        aboutParagraphs[0].textContent = lang.aboutP1;
        aboutParagraphs[1].textContent = lang.aboutP2;
        aboutParagraphs[2].textContent = lang.aboutP3;
    }
    
    // Update section titles
    const sectionHeadings = document.querySelectorAll('.section-heading-article');
    if (sectionHeadings[0]) sectionHeadings[0].textContent = lang.aboutTitle;
    if (sectionHeadings[1]) sectionHeadings[1].textContent = lang.skillsTitle;
    if (sectionHeadings[2]) sectionHeadings[2].textContent = lang.projectsTitle;
    
    // Update footer quote
    const footerQuote = document.querySelector('.two-words article');
    if (footerQuote) {
        footerQuote.textContent = lang.footerQuote;
    }
    
    // Update Get in Touch
    const getInTouch = document.querySelector('.getintouch-heading article');
    if (getInTouch) {
        getInTouch.textContent = lang.getInTouch;
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    updateContent();
});
