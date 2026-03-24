import cvEn from "url:../assets/cv/cv_en.pdf";
import cvEs from "url:../assets/cv/cv_es.pdf";

// Language toggle logic
function initLangToggle() {
  const btn = document.getElementById('lang-toggle');
  const label = document.getElementById('lang-label');
  if (!btn) return;

  // Restore saved lang preference
  let lang = localStorage.getItem('lang') || 'en';
  applyLang(lang);

  btn.addEventListener('click', () => {
    lang = lang === 'en' ? 'es' : 'en';
    localStorage.setItem('lang', lang);
    applyLang(lang);
  });

  function applyLang(l) {
    label.textContent = l === 'en' ? 'ES' : 'EN';
    document.querySelectorAll('[data-en]').forEach(el => {
      el.textContent = l === 'en' ? el.dataset.en : el.dataset.es;
    });
    // Update CV links
    ['cv-btn', 'about-cv-btn'].forEach(id => {
      const btn = document.getElementById(id);
      if (btn) {
        btn.href = l === 'en' ? cvEn : cvEs;
      }
    });
  }
}

export default initLangToggle;
