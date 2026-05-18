// Simple interactions for profiles page
// - toggles card active state when "View Profile" is clicked
// - enables smooth scrolling for anchor links

document.addEventListener('DOMContentLoaded', () => {
  // NAV TOGGLE: show/hide mobile menu
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      navLinks.classList.toggle('mobile-open');
    });

    // close mobile menu when clicking a link
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        if (navLinks.classList.contains('mobile-open')) {
          navLinks.classList.remove('mobile-open');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  // Toggle card active state
  document.querySelectorAll('.small-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      // allow normal navigation if user holds ctrl/cmd or opens in new tab
      if (e.metaKey || e.ctrlKey) return;
      e.preventDefault();
      const card = btn.closest('.general-card');
      if (!card) return;
      card.classList.toggle('active');
      btn.textContent = card.classList.contains('active') ? 'Hide Profile' : 'View Profile';
    });
  });

  // Smooth scroll for same-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
});
