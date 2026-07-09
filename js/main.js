/* ============================================================
   PORTAFOLIO — main.js
   Módulos:
   1. Efecto de escritura (typing) en el Hero
   2. Barras de skill animadas con IntersectionObserver
   3. Formulario de contacto
   ============================================================ */


/* ============================================================
   1. EFECTO TYPING — Hero
   ============================================================ */
(function initTyping() {
  const el = document.getElementById('typed-text');
  if (!el) return;

  const phrases = [
    'construyendo_la_web();',
    'aprendiendo_cada_dia();',
    'sql.query("SELECT * FROM oportunidades");',
    'css.style({ passion: "max" });',
  ];

  let phraseIdx = 0;
  let charIdx   = 0;
  let deleting  = false;

  function type() {
    const current = phrases[phraseIdx];

    if (!deleting) {
      el.textContent = current.slice(0, charIdx + 1);
      charIdx++;

      if (charIdx === current.length) {
        setTimeout(() => { deleting = true; type(); }, 2000);
        return;
      }
    } else {
      el.textContent = current.slice(0, charIdx - 1);
      charIdx--;

      if (charIdx === 0) {
        deleting  = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
      }
    }

    setTimeout(type, deleting ? 40 : 70);
  }

  type();
})();


/* ============================================================
   2. BARRAS DE SKILL — animadas al hacer scroll
   ============================================================ */
(function initSkillBars() {
  const cards = document.querySelectorAll('.skill-card[data-level]');
  if (!cards.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const fill = entry.target.querySelector('.skill-bar__fill');
      if (fill) fill.style.width = entry.target.dataset.level + '%';
      observer.unobserve(entry.target); // solo anima una vez
    });
  }, { threshold: 0.3 });

  cards.forEach(card => observer.observe(card));
})();


/* ============================================================
   3. FORMULARIO DE CONTACTO
   ============================================================ */
(function initContactForm() {
  const btn = document.querySelector('.btn-send');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const name    = document.getElementById('contact-name')?.value.trim();
    const email   = document.getElementById('contact-email')?.value.trim();
    const message = document.getElementById('contact-message')?.value.trim();

    if (!name || !email || !message) {
      alert('Por favor completa todos los campos antes de enviar.');
      return;
    }

    /* Aquí podrías conectar un servicio como Formspree o EmailJS */
    alert(`¡Gracias, ${name}! Tu mensaje fue recibido. Pronto me pondré en contacto.`);

    document.getElementById('contact-name').value    = '';
    document.getElementById('contact-email').value   = '';
    document.getElementById('contact-message').value = '';
  });
})();
