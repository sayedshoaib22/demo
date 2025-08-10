// Page Navigation
function showPage(pageId) {
    const pages = document.querySelectorAll('.page-content');
    pages.forEach(page => {
      page.classList.remove('active', 'fade-in-up');
    });
  
    const targetPage = document.getElementById(pageId);
    targetPage.classList.add('active');
    setTimeout(() => {
      targetPage.classList.add('fade-in-up');
    }, 50);
  
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.classList.remove('active');
    });
  
    window.scrollTo({ top: 0, behavior: 'smooth' });
  
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      const bsCollapse = new bootstrap.Collapse(navbarCollapse);
      bsCollapse.hide();
    }
  }
  
  // Contact Form Submission
  document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
  
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
  
        if (!name || !email || !message) {
          alert('Please fill in all required fields.');
          return;
        }
  
        const submitBtn = document.querySelector('#contactForm button[type="submit"]');
        const originalHTML = submitBtn.innerHTML;
  
        submitBtn.innerHTML = '<div class="spinner me-2"></div>Sending...';
        submitBtn.disabled = true;
  
        setTimeout(() => {
          alert('Thank you for your message! We will get back to you soon.');
          document.getElementById('contactForm').reset();
          submitBtn.innerHTML = originalHTML;
          submitBtn.disabled = false;
        }, 2000);
      });
    }
  });
  
  // Enhanced Navbar scroll effect
  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(255, 255, 255, 0.98)';
      navbar.style.boxShadow = '0 8px 32px rgba(0,0,0,0.15)';
    } else {
      navbar.style.background = 'rgba(255, 255, 255, 0.85)';
      navbar.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)';
    }
  });
  
  // Counter animation for stats
  function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      element.textContent = Math.floor(current) + (element.dataset.suffix || '');
    }, 20);
  }
  
  // Initialize counters when in view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counters = entry.target.querySelectorAll('.stat-number');
        counters.forEach(counter => {
          const target = parseInt(counter.textContent);
          if (target > 0) {
            animateCounter(counter, target);
          }
        });
        observer.unobserve(entry.target);
      }
    });
  });
  
  // Initialize stats observer
  const statsSection = document.querySelector('.stats-section');
  if (statsSection) {
    observer.observe(statsSection);
  }
  
  // Create dynamic particles
  function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDuration = (Math.random() * 3 + 5) + 's';
    particle.style.opacity = Math.random() * 0.5 + 0.3;
  
    const colors = ['var(--primary-color)', 'var(--accent-color)', 'var(--success-color)', 'var(--warning-color)'];
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];
  
    const particlesContainer = document.querySelector('.particles');
    if (particlesContainer) {
      particlesContainer.appendChild(particle);
  
      setTimeout(() => {
        particle.remove();
      }, 8000);
    }
  }
  
  // DOM Content Loading
  document.addEventListener('DOMContentLoaded', function () {
    // Generate particles periodically
    setInterval(createParticle, 1000);
  
    // Enhanced hover effects for cards
    const cards = document.querySelectorAll('.card-modern, .product-card, .service-card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-8px) scale(1.02)';
      });
      card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
      });
    });
  
    // Enhanced scroll animations
    const scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
        }
      });
    }, { threshold: 0.1 });
  
    document.querySelectorAll('.card-modern, .service-card, .product-card, .feature-card, .industry-showcase').forEach(el => {
      scrollObserver.observe(el);
    });
  
    // Enhanced client logo interactions
    const clientCards = document.querySelectorAll('.client-logo-card');
    clientCards.forEach(card => {
      card.addEventListener('mouseenter', function () {
        this.style.background = 'rgba(255, 255, 255, 1)';
        this.style.borderColor = 'rgba(99, 102, 241, 0.3)';
      });
      card.addEventListener('mouseleave', function () {
        this.style.background = 'rgba(255, 255, 255, 0.9)';
        this.style.borderColor = 'rgba(255, 255, 255, 0.3)';
      });
    });
  
    // Enhanced button interactions
    const buttons = document.querySelectorAll('.btn-primary-custom, .btn-outline-custom');
    buttons.forEach(button => {
      button.addEventListener('mouseenter', function () {
        const icon = this.querySelector('i');
        if (icon) {
          icon.style.transform = 'translateX(5px)';
          icon.style.transition = 'transform 0.3s ease';
        }
      });
      button.addEventListener('mouseleave', function () {
        const icon = this.querySelector('i');
        if (icon) {
          icon.style.transform = 'translateX(0)';
        }
      });
    });
  
    // Trigger initial animations
    setTimeout(() => {
      const heroElements = document.querySelectorAll('.hero-section .fade-in-up');
      heroElements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add('fade-in-up');
        }, index * 200);
      });
    }, 100);
  });
  
  // Handle image loading errors globally
  document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG' && e.target.src.includes('images/')) {
      e.target.style.display = 'none';
      const placeholder = e.target.nextElementSibling;
      if (placeholder && placeholder.classList.contains('logo-placeholder')) {
        placeholder.style.display = 'flex';
      }
    }
  }, true);
  
  // Smooth scrolling for anchor links
  document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      const targetId = e.target.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
  
  // Enhanced form validation
  function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
      if (!field.value.trim()) {
        field.classList.add('is-invalid');
        isValid = false;
      } else {
        field.classList.remove('is-invalid');
      }
    });
    
    return isValid;
  }
  
  // Real-time form validation
  document.addEventListener('input', function(e) {
    if (e.target.matches('.form-control[required]')) {
      if (e.target.value.trim()) {
        e.target.classList.remove('is-invalid');
      }
    }
  });
  
  // Enhanced mobile menu handling
  document.addEventListener('click', function(e) {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarCollapse) {
      if (e.target.closest('.navbar-nav .nav-link')) {
        if (navbarCollapse.classList.contains('show')) {
          const bsCollapse = new bootstrap.Collapse(navbarCollapse);
          bsCollapse.hide();
        }
      }
    }
  });
  
  // Lazy loading for images
  function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });
  
    images.forEach(img => imageObserver.observe(img));
  }
  
  // Initialize lazy loading
  document.addEventListener('DOMContentLoaded', lazyLoadImages);
  
  // Performance optimization: Throttle scroll events
  function throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    }
  }
  
  // Apply throttling to scroll event
  window.addEventListener('scroll', throttle(function() {
    // Existing scroll logic here
  }, 16)); // ~60fps
  
  // Add loading state management
  function showLoading(element) {
    element.classList.add('loading');
    element.disabled = true;
  }
  
  function hideLoading(element) {
    element.classList.remove('loading');
    element.disabled = false;
  }
  
  // Enhanced error handling
  window.addEventListener('error', function(e) {
    console.error('Global error caught:', e.error);
    // You could send this to an error reporting service
  });
  
  window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled promise rejection:', e.reason);
    // You could send this to an error reporting service
  });
  
  // Page visibility API for performance optimization
  document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
      // Pause animations or heavy operations
      clearInterval(window.particleInterval);
    } else {
      // Resume animations
      window.particleInterval = setInterval(createParticle, 1000);
    }
  });
  
  // Initialize particle interval tracking
  window.particleInterval = setInterval(createParticle, 1000);
  
  // Add keyboard navigation support
  document.addEventListener('keydown', function(e) {
    // ESC key to close modals or mobile menu
    if (e.key === 'Escape') {
      const navbarCollapse = document.querySelector('.navbar-collapse.show');
      if (navbarCollapse) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse);
        bsCollapse.hide();
      }
    }
    
    // Tab navigation enhancement
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-navigation');
    }
  });
  
  // Remove keyboard navigation class on mouse interaction
  document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
  });
  
  // Add focus trap for accessibility
  function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
  
    element.addEventListener('keydown', function(e) {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    });
  }