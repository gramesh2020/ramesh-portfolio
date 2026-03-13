/**
 * PHASE 7: JavaScript — Interactions & Animations
 */

document.addEventListener('DOMContentLoaded', () => {

  /* --------------------------------------------------
     1. Intersection Observer — fade-in on scroll
        Each .feature-card animates in when it enters view
  -------------------------------------------------- */
  const animatedEls = document.querySelectorAll(
    '.feature-card, .exp-item, .award-card, .edu-item, .cert-item, .skill-group'
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  animatedEls.forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 0.08}s`;
    observer.observe(el);
  });


  /* --------------------------------------------------
     2. Nav — add shadow on scroll
  -------------------------------------------------- */
  const nav = document.querySelector('.site-nav');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 8) {
      nav.style.boxShadow = '0 2px 16px rgba(20,0,255,0.07)';
    } else {
      nav.style.boxShadow = 'none';
    }
  }, { passive: true });


  /* --------------------------------------------------
     3. CTA email button — copy email on click
  -------------------------------------------------- */
  const emailBtn = document.querySelector('.cta-email-btn');

  if (emailBtn) {
    emailBtn.addEventListener('click', async (e) => {
      const email = 'hello@rubenmeines.com';
      // If it's a mailto link, let browser handle it; also copy to clipboard
      try {
        await navigator.clipboard.writeText(email);
        const original = emailBtn.textContent;
        emailBtn.textContent = 'Copied!';
        setTimeout(() => { emailBtn.textContent = original; }, 1800);
      } catch (_) {
        // clipboard not available — mailto will still fire
      }
    });
  }

});
