/* ============================================================
   JUSTINE CORPUZ — PORTFOLIO SCRIPTS
   js/main.js
   ============================================================ */

/* ─── 1. TWINKLING STARS ──────────────────────────────────── */
(function initStars() {
  const container = document.getElementById('stars');
  if (!container) return;
  const colors = ['var(--accent)', 'var(--accent2)', 'var(--accent3)'];
  for (let i = 0; i < 60; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    const color = colors[Math.floor(Math.random() * colors.length)];
    star.style.cssText = [
      `left:${Math.random() * 100}%`,
      `top:${Math.random() * 100}%`,
      `--d:${2 + Math.random() * 4}s`,
      `--delay:${Math.random() * 4}s`,
      `--op:${0.1 + Math.random() * 0.4}`,
      `background:${color}`,
    ].join(';');
    container.appendChild(star);
  }
})();

/* ─── 2. HAMBURGER MENU ───────────────────────────────────── */
(function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const navlinks  = document.getElementById('navlinks');
  if (!hamburger || !navlinks) return;

  hamburger.addEventListener('click', () => {
    navlinks.classList.toggle('open');
  });

  // Close menu when a link is clicked (mobile UX)
  navlinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navlinks.classList.remove('open'));
  });
})();

/* ─── 3. PROJECT FILTER ───────────────────────────────────── */
function filterProjects(cat, btn) {
  // Update active button
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  // Show / hide cards
  document.querySelectorAll('.project-card').forEach(card => {
    const cats = card.dataset.cat || '';
    card.style.display = (cat === 'all' || cats.includes(cat)) ? '' : 'none';
  });
}

/* ─── 4. SKILL BAR ANIMATIONS (Intersection Observer) ────── */
(function initSkillBars() {
  document.querySelectorAll('.skill-fill').forEach(el => {
    const target = el.style.width;
    el.style.width = '0';                         // start at 0

    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        el.style.transition = 'width 1.2s ease';
        el.style.width = target;                  // animate to target
        observer.disconnect();
      }
    }, { threshold: 0.15 });

    observer.observe(el);
  });
})();

/* ─── 5. ACTIVE NAV HIGHLIGHT (scroll spy) ───────────────── */
(function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-links a');

  function onScroll() {
    let current = '';
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 100) {
        current = section.id;
      }
    });

    navLinks.forEach(a => {
      const isActive = a.getAttribute('href') === '#' + current;
      a.style.color       = isActive ? 'var(--accent)' : '';
      a.style.borderColor = isActive ? 'var(--accent)' : '';
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
})();

/* ─── 6. CONTACT FORM TOAST ──────────────────────────────── */
function showToast() {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

/* ─── 7. CONTACT FORM INPUT FOCUS (inline CSS replaced) ─── */
(function initFormInputs() {
  document.querySelectorAll('.contact-input').forEach(input => {
    input.addEventListener('focus', () => {
      input.style.borderColor = 'var(--accent)';
    });
    input.addEventListener('blur', () => {
      input.style.borderColor = 'var(--border)';
    });
  });
})();