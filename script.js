// Smooth scrolling pro navigační odkazy
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = 85; // Výška navigační lišty
            const targetPosition = target.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Mobilní menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Změna navbar při scrollování
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = '#ffffff';
        navbar.style.backdropFilter = 'none';
    }
});

// Animace při scrollování odstraněny

// Kontaktní formulář
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Získání dat z formuláře
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Základní validace
        if (!data.name || !data.email || !data.message) {
            alert('Prosím vyplňte všechna povinná pole.');
            return;
        }
        
        if (!data.consent) {
            alert('Prosím souhlaste se zpracováním osobních údajů.');
            return;
        }
        
        // Simulace odeslání (v reálné aplikaci by se zde odeslal AJAX požadavek)
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Odesílám...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('Děkujeme za vaši zprávu! Brzy vás budeme kontaktovat.');
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Čítače statistik odstraněny

// Parallax efekt odstraněn - způsoboval problémy s pozicováním

// Tooltip pro sociální sítě
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = this.querySelector('span').textContent;
        tooltip.style.cssText = `
            position: absolute;
            background: #333;
            color: white;
            padding: 5px 10px;
            border-radius: 5px;
            font-size: 12px;
            z-index: 1000;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.3s;
        `;
        
        document.body.appendChild(tooltip);
        
        const rect = this.getBoundingClientRect();
        tooltip.style.left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + 'px';
        tooltip.style.top = rect.top - tooltip.offsetHeight - 5 + 'px';
        
        setTimeout(() => tooltip.style.opacity = '1', 10);
        
        this.addEventListener('mouseleave', () => {
            tooltip.remove();
        });
    });
});

// Lazy loading pro obrázky
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
        }
    });
});

document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
});

// Aktivní navigační odkaz odstraněn

// Konzole log pro vývojáře
console.log('%c🚀 Lucie Kašíková - Vodafone Business Partner', 'color: #e60012; font-size: 20px; font-weight: bold;');
console.log('%cWebová stránka byla vytvořena s láskou pro profesionální prezentaci.', 'color: #666; font-size: 14px;');
