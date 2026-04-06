/* ============================================
   CERVI TRACKER — MARKETING SITE JS
   Smooth scroll, header behavior, scroll animations, mobile nav
   ============================================ */

(function () {
  'use strict';

  // ---- Header scroll behavior ----
  const header = document.getElementById('site-header');
  let lastScroll = 0;

  function handleHeaderScroll() {
    const y = window.scrollY;
    if (y > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    lastScroll = y;
  }

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll();

  // ---- Mobile nav toggle ----
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      const isOpen = mainNav.classList.toggle('open');
      navToggle.classList.toggle('active', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close nav on link click
    mainNav.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('open');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // ---- Scroll-triggered fade-in animations ----
  const animElements = document.querySelectorAll('.anim-fade-up');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            // stagger children if it's a grid
            const parent = entry.target;
            const children = parent.querySelectorAll('.glass-card, .feature-row, .signal-item, .trust-item, .reports-list li');

            if (children.length > 0) {
              children.forEach(function (child, i) {
                child.style.opacity = '0';
                child.style.transform = 'translateY(20px)';
                child.style.transition = 'opacity 0.5s cubic-bezier(0.4,0,0.2,1) ' + (i * 0.1) + 's, transform 0.5s cubic-bezier(0.4,0,0.2,1) ' + (i * 0.1) + 's';
                requestAnimationFrame(function () {
                  child.style.opacity = '1';
                  child.style.transform = 'translateY(0)';
                });
              });
            }

            parent.classList.add('visible');
            observer.unobserve(parent);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    animElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show everything
    animElements.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // ---- Smooth scroll for anchor links ----
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerHeight = header ? header.offsetHeight : 0;
        const y = target.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
  });

})();
