// Dynamic copyright year
    document.getElementById('footer-copyright').textContent =
      '\u00A9 ' + new Date().getFullYear() + ' Nuclear AI. Todos os direitos reservados.';

    // Scroll reveal with Intersection Observer
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Stagger the animation slightly based on position in viewport
          const delay = Array.from(entry.target.parentElement.children)
            .filter(el => el.classList.contains('reveal'))
            .indexOf(entry.target) * 80;

          setTimeout(() => {
            entry.target.classList.add('visible');
          }, Math.min(delay, 400));

          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
