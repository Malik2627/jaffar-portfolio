/**
 * ==========================================================================
 * JAFFAR PORTFOLIO - MAIN JAVASCRIPT
 * GUVI Full Stack Development Assignment
 * Student: Jaffar Malik | B.Sc. Computer Science (A.I. & M.L.)
 * Tech Stack: HTML5, Vanilla CSS3, Vanilla JavaScript
 * ==========================================================================
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  console.log(
    '%c JAFFAR MALIK PORTFOLIO %c B.Sc. Computer Science (A.I. & M.L.) %c GUVI Assignment ',
    'background: #00f2fe; color: #000; font-weight: bold; padding: 4px 8px; border-radius: 4px 0 0 4px;',
    'background: #7f00ff; color: #fff; font-weight: bold; padding: 4px 8px;',
    'background: #111827; color: #00f5d4; font-weight: bold; padding: 4px 8px; border-radius: 0 4px 4px 0;'
  );

  // Initialize Core Application Modules
  ThemeModule.init();
  NavigationModule.init();
  SkillsAnimationModule.init();
  ContactFormModule.init();
  ScrollRevealModule.init();
});

/* --------------------------------------------------------------------------
   1. THEME SWITCHER MODULE (☀️ LIGHT / 🌙 DARK TOGGLE WITH LOCALSTORAGE)
   -------------------------------------------------------------------------- */
const ThemeModule = (() => {
  const THEME_STORAGE_KEY = 'jaffar_portfolio_theme';
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIconSun = document.querySelector('.theme-icon-sun');
  const themeIconMoon = document.querySelector('.theme-icon-moon');
  const themeText = document.querySelector('.theme-text');

  /**
   * Determine initial theme based on localStorage or system preference
   */
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }
    // Respect OS system preference if available, default to dark
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }
    return 'dark';
  };

  /**
   * Apply selected theme to document & update button UI
   */
  const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);

    if (themeText) {
      themeText.textContent = theme === 'light' ? 'Light' : 'Dark';
    }

    if (themeIconSun && themeIconMoon) {
      if (theme === 'light') {
        themeIconSun.style.display = 'inline-block';
        themeIconMoon.style.display = 'none';
      } else {
        themeIconSun.style.display = 'none';
        themeIconMoon.style.display = 'inline-block';
      }
    }

    if (themeToggleBtn) {
      const targetTheme = theme === 'dark' ? 'light' : 'dark';
      themeToggleBtn.setAttribute('aria-label', `Current theme: ${theme}. Click to switch to ${targetTheme} mode.`);
    }
  };

  /**
   * Toggle theme between light and dark
   */
  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
  };

  return {
    init: () => {
      const initialTheme = getInitialTheme();
      applyTheme(initialTheme);

      if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);
      }

      // Automatically update theme if OS preference changes and user has no saved preference
      if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
          if (!localStorage.getItem(THEME_STORAGE_KEY)) {
            applyTheme(e.matches ? 'dark' : 'light');
          }
        });
      }
    },
    toggleTheme,
    applyTheme
  };
})();

/* --------------------------------------------------------------------------
   2. NAVIGATION MODULE (STICKY HEADER, MOBILE MENU, SCROLLSPY, SMOOTH SCROLL)
   -------------------------------------------------------------------------- */
const NavigationModule = (() => {
  const header = document.getElementById('site-header');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const mobileBackdrop = document.getElementById('mobile-backdrop');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  /**
   * Toggle Sticky Header style on scroll
   */
  const handleHeaderScroll = () => {
    if (!header) return;
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  /**
   * Close Mobile Navigation Drawer
   */
  const closeMobileMenu = () => {
    if (!mobileToggle || !navMenu) return;
    mobileToggle.classList.remove('is-active');
    navMenu.classList.remove('is-active');
    if (mobileBackdrop) mobileBackdrop.classList.remove('is-active');
    document.body.classList.remove('no-scroll');
    mobileToggle.setAttribute('aria-expanded', 'false');
  };

  /**
   * Open Mobile Navigation Drawer
   */
  const openMobileMenu = () => {
    if (!mobileToggle || !navMenu) return;
    mobileToggle.classList.add('is-active');
    navMenu.classList.add('is-active');
    if (mobileBackdrop) mobileBackdrop.classList.add('is-active');
    document.body.classList.add('no-scroll');
    mobileToggle.setAttribute('aria-expanded', 'true');
  };

  /**
   * Toggle Mobile Navigation Drawer State
   */
  const toggleMobileMenu = () => {
    const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  };

  /**
   * Active Navigation State Tracking on Scroll
   */
  const updateActiveNavLink = () => {
    if (!sections.length || !navLinks.length) return;

    const scrollY = window.pageYOffset + 120;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  /**
   * Smooth Anchor Scroll with Header Offset
   */
  const initSmoothScroll = () => {
    navLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
          const targetSection = document.querySelector(targetId);
          if (targetSection) {
            e.preventDefault();
            closeMobileMenu();

            const headerOffset = 70;
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  };

  /**
   * Initialize Navigation Listeners & Accessibility
   */
  const initEventListeners = () => {
    window.addEventListener('scroll', () => {
      handleHeaderScroll();
      updateActiveNavLink();
    });

    if (mobileToggle) {
      mobileToggle.addEventListener('click', toggleMobileMenu);
    }

    if (mobileBackdrop) {
      mobileBackdrop.addEventListener('click', closeMobileMenu);
    }

    // Close mobile menu on Escape key press
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu && navMenu.classList.contains('is-active')) {
        closeMobileMenu();
      }
    });
  };

  return {
    init: () => {
      handleHeaderScroll();
      updateActiveNavLink();
      initSmoothScroll();
      initEventListeners();
    },
    closeMobileMenu
  };
})();

/* --------------------------------------------------------------------------
   3. SKILLS ANIMATION MODULE (INTERSECTION OBSERVER PROGRESS BARS)
   -------------------------------------------------------------------------- */
const SkillsAnimationModule = (() => {
  const init = () => {
    const skillsSection = document.getElementById('skills');
    const progressFills = document.querySelectorAll('.progress-bar-fill');

    if (!skillsSection || !progressFills.length) return;

    const observerOptions = {
      root: null,
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observerInstance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          progressFills.forEach((fill, index) => {
            const targetWidth = fill.style.width;
            fill.style.width = '0%';
            setTimeout(() => {
              fill.style.width = targetWidth;
            }, 100 + index * 50);
          });
          observerInstance.unobserve(entry.target);
        }
      });
    }, observerOptions);

    observer.observe(skillsSection);
  };

  return { init };
})();

/* --------------------------------------------------------------------------
   4. CONTACT FORM MODULE (FRONTEND VALIDATION & FEEDBACK)
   -------------------------------------------------------------------------- */
const ContactFormModule = (() => {
  const form = document.getElementById('portfolio-contact-form');
  const successMsg = document.getElementById('contact-success-msg');
  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const subjectInput = document.getElementById('contact-subject');
  const messageInput = document.getElementById('contact-message');

  const errorName = document.getElementById('error-name');
  const errorEmail = document.getElementById('error-email');
  const errorSubject = document.getElementById('error-subject');
  const errorMessage = document.getElementById('error-message');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const clearFieldError = (input, errorEl) => {
    if (input) input.classList.remove('input-error');
    if (errorEl) errorEl.classList.remove('is-visible');
  };

  const showFieldError = (input, errorEl) => {
    if (input) input.classList.add('input-error');
    if (errorEl) errorEl.classList.add('is-visible');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    // Reset previous errors
    clearFieldError(nameInput, errorName);
    clearFieldError(emailInput, errorEmail);
    clearFieldError(subjectInput, errorSubject);
    clearFieldError(messageInput, errorMessage);

    if (successMsg) successMsg.style.display = 'none';

    // Validate Name
    if (!nameInput || !nameInput.value.trim()) {
      showFieldError(nameInput, errorName);
      isValid = false;
    }

    // Validate Email
    if (!emailInput || !validateEmail(emailInput.value.trim())) {
      showFieldError(emailInput, errorEmail);
      isValid = false;
    }

    // Validate Subject
    if (!subjectInput || !subjectInput.value.trim()) {
      showFieldError(subjectInput, errorSubject);
      isValid = false;
    }

    // Validate Message
    if (!messageInput || messageInput.value.trim().length < 10) {
      showFieldError(messageInput, errorMessage);
      isValid = false;
    }

    if (isValid) {
      // Show success feedback
      if (successMsg) {
        successMsg.style.display = 'flex';
      }

      // Reset form fields
      form.reset();

      // Automatically hide success message after 8 seconds
      setTimeout(() => {
        if (successMsg) successMsg.style.display = 'none';
      }, 8000);
    }
  };

  const init = () => {
    if (!form) return;

    form.addEventListener('submit', handleSubmit);

    // Live error cleanup on typing
    const inputs = [nameInput, emailInput, subjectInput, messageInput];
    const errors = [errorName, errorEmail, errorSubject, errorMessage];

    inputs.forEach((input, idx) => {
      if (input) {
        input.addEventListener('input', () => {
          clearFieldError(input, errors[idx]);
        });
      }
    });
  };

  return { init };
})();

/* --------------------------------------------------------------------------
   5. SCROLL REVEAL MODULE (INTERSECTION OBSERVER FOR FADE-IN ANIMATIONS)
   -------------------------------------------------------------------------- */
const ScrollRevealModule = (() => {
  const init = () => {
    // If user prefers reduced motion, reveal everything instantly without animation
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.reveal-on-scroll').forEach(el => el.classList.add('is-revealed'));
      return;
    }

    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    if (!revealElements.length) return;

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.08
    };

    const observer = new IntersectionObserver((entries, observerInstance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = entry.target.getAttribute('data-reveal-delay') || 0;
          setTimeout(() => {
            entry.target.classList.add('is-revealed');
          }, Number(delay));
          observerInstance.unobserve(entry.target);
        }
      });
    }, observerOptions);

    revealElements.forEach((el) => observer.observe(el));
  };

  return { init };
})();
